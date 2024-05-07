
DROP PROCEDURE IF EXISTS usp_GetInstructorDataByReportId;
GO

DROP TYPE IF EXISTS InstructorIdType;
GO

CREATE TYPE InstructorIdType AS TABLE
(
	InstructorId INT
);
GO

CREATE PROCEDURE usp_GetInstructorDataByReportId
	@ReportId INT,
	@InstructorId InstructorIdType READONLY
AS BEGIN

	IF(@ReportId = 1)
	BEGIN

		SELECT	DISTINCT [Admin].UserId,
				[Admin].[FirstName],
				[Admin].[LastName],
				[Admin].[CNIC],
				[Admin].[Email],
				[Admin].[PhoneNumber],
				[Admin].[Nationality],
				[Admin].[JoiningDate],
				[Admin].[FacultyType],
				[Admin].[Gender],
				[Admin].[DateOfBirth],
				[StaffAppointment].[Designation],
				[EducationalBackground].[DegreeTitle],
				[EducationalBackground].[Specialization],
				[EducationalBackground].[University],
				[EducationalBackground].[CountryOfUniversity],
				[EducationalBackground].[DateOfGraduation]
		FROM	[Admin],
				[TeachingHistory],
				[Publications],
				[EducationalBackground],
				[GrantsAvailed],
				[AttendedConferences],
				[Supervision],
				[Workshop],
				[CommunityService],
				[StaffAppointment],
				[CommittieeMembership],
				[ClubPatronage]
		WHERE
				[Admin].[UserId] = [TeachingHistory].[UserId] AND
				[Admin].[UserId] = [Publications].[UserId] AND
				[Admin].[UserId] = [EducationalBackground].[UserId] AND
				[Admin].[UserId] = [GrantsAvailed].[UserId] AND
				[Admin].[UserId] = [AttendedConferences].[UserId] AND
				[Admin].[UserId] = [Supervision].[UserId] AND
				[Admin].[UserId] = [Workshop].[UserId] AND
				[Admin].[UserId] = [CommunityService].[UserId] AND
				[Admin].[UserId] = [StaffAppointment].[UserId] AND
				[Admin].[UserId] = [CommittieeMembership].[UserId] AND
				[Admin].[UserId] = [ClubPatronage].[UserId] AND
				[Admin].[UserId] IN (SELECT InstructorId FROM @InstructorId) AND
				[StaffAppointment].[StaffAppointmentId] = (SELECT MIN([StaffAppointmentId]) FROM [StaffAppointment] sa
														WHERE sa.[UserId] = [Admin].[UserId] 
														GROUP BY sa.[UserId]) AND
				[EducationalBackground].[EducationalBackgroundId] = (SELECT MIN([EducationalBackgroundId]) FROM [EducationalBackground] eb
														WHERE eb.[UserId] = [Admin].[UserId] 
														GROUP BY eb.[UserId])
  
	END
	ELSE IF(@ReportId = 3)
	BEGIN
		SELECT	[Admin].UserId,
				[Admin].[FirstName],
				[Admin].[LastName],
				[Admin].PECNo,
				(SELECT TOP 1 Designation FROM StaffAppointment WHERE TermTo IN (SELECT MIN(TermTo) FROM StaffAppointment WHERE UserId = [Admin].UserId) AND UserId = [Admin].UserId) AS Designation,
				CONVERT(DATE, [Admin].JoiningDate) AS JoiningDate,

				[EducationalBackground].DegreeTitle,
				DATEPART(YEAR, [EducationalBackground].DateOfGraduation) AS DateOfGraduation,
				[EducationalBackground].University,
				[EducationalBackground].Specialization,

				(SELECT SUM(CreditHours) FROM TeachingHistory WHERE SemesterName = 'Spring 2023' AND UserId = [Admin].UserId) AS CourseTaughtInSpring2023,
				(SELECT SUM(CreditHours) FROM TeachingHistory WHERE SemesterName = 'Fall 2023' AND UserId = [Admin].UserId) AS CourseTaughtInFall2023
				

		FROM	[Admin],
				[EducationalBackground]
				
		WHERE
				[Admin].[UserId] = [EducationalBackground].[UserId] AND
				[Admin].[UserId] IN (SELECT InstructorId FROM @InstructorId)
				
		ORDER BY [Admin].UserId, [EducationalBackground].DateOfGraduation DESC;

	END
	ELSE IF(@ReportId = 2)
	BEGIN
		SELECT	[TeachingHistory].TeachingHistoryId,
				[Admin].UserId,
				[Admin].[FirstName],
				[Admin].[LastName],
				[TeachingHistory].CreditHours,
				[TeachingHistory].CourseName,
				[TeachingHistory].SemesterName

		FROM	[Admin],
				[TeachingHistory]
				
		WHERE
				[Admin].[UserId] = [TeachingHistory].[UserId] AND
				[Admin].[UserId] IN (SELECT InstructorId FROM @InstructorId) AND
				SemesterName IN ('Fall 2023', 'Spring 2023')
				
		ORDER BY [Admin].UserId, [TeachingHistory].SemesterName DESC;
	END
	ELSE IF(@ReportId =4)
	BEGIN
		SELECT	[Publications].PublicationId,
				[Admin].UserId,
				[Admin].[FirstName],
				[Admin].[LastName],
				[Publications].PublicationName,
				[Publications].PublicationType,
				[Publications].PublicationDate,
				[Publications].PublicationLink

		FROM	[Admin],
				[Publications]
				
		WHERE
				[Admin].[UserId] = [Publications].[UserId] AND
				[Admin].[UserId] IN (SELECT InstructorId FROM @InstructorId)
				
		ORDER BY PublicationDate DESC;
	END
	ELSE IF(@ReportId =5)
	BEGIN
		
		SELECT [Admin].UserId,
			   [Admin].FirstName,
			   [Admin].LastName,
			   [Admin].School,
			   [Admin].Program,
			   [CommittieeMembership].CommittieeMembershipId,
			   [CommittieeMembership].CommittieeName,
			   [CommittieeMembership].Designation,
			   [CommittieeMembership].TermFrom CommittieeMembershipTermFrom,
			   [CommittieeMembership].TermTo   CommittieeMembershipTermTo
		FROM   [Admin],
			   [CommittieeMembership]
		WHERE  [Admin].UserId = [CommittieeMembership].UserId AND
			   [Admin].UserId IN (SELECT InstructorId from @InstructorId)
		ORDER  BY [Admin].UserId;
	END
	ELSE IF(@ReportId =6)
	BEGIN
		
		SELECT [Admin].UserId,
			   [Admin].FirstName,
			   [Admin].LastName,
			   [Admin].School,
			   [Admin].Program,
			   [StaffAppointment].StaffAppointmentId,
			   [StaffAppointment].Designation,
			   [StaffAppointment].TermFrom StaffAppointmentTermFrom,
			   [StaffAppointment].TermTo   StaffAppointmentTermTo
		FROM   [Admin],
			   [StaffAppointment]
		WHERE  [Admin].UserId = [StaffAppointment].UserId AND
			   [Admin].UserId IN (SELECT InstructorId from @InstructorId)
		ORDER  BY [Admin].UserId;
	END
	ELSE IF(@ReportId =7)
	BEGIN
		
		SELECT [Admin].UserId,
			   [Admin].FirstName,
			   [Admin].LastName,
			   [Admin].School,
			   [Admin].Program,
			   [ClubPatronage].ClubPatronageId,
			   [ClubPatronage].ClubName,
			   [ClubPatronage].TermFrom ClubPatronageTermFrom,
			   [ClubPatronage].TermTo   ClubPatronageTermTo
		FROM   [Admin],
			   [ClubPatronage]
		WHERE  [Admin].UserId = [ClubPatronage].UserId AND
			   [Admin].UserId IN (SELECT InstructorId from @InstructorId)
		ORDER  BY [Admin].UserId;
	END

END;
GO

DECLARE @MyIntegerArray AS InstructorIdType;

INSERT INTO @MyIntegerArray (InstructorId) VALUES (1), (2), (3), (4), (13);

EXEC usp_GetInstructorDataByReportId 
	@ReportId =7,
	@InstructorId = @MyIntegerArray;