-- Admin table
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Admin')
BEGIN
    CREATE TABLE [dbo].[Admin] (
      [UserId] INT NOT NULL PRIMARY KEY IDENTITY(1,1),
      [Email] VARCHAR(255) NOT NULL,
      [Password] VARCHAR(255) NOT NULL,
      [FirstName] VARCHAR(255) NOT NULL,
      [LastName] VARCHAR(255) NULL,
      [Nationality] VARCHAR(255) NULL,
      [CNIC] INT NULL,
      [PECNo] INT NULL,
      [PhoneNumber] INT NULL,
      [JoiningDate] Datetime NULL,
      [OnboardingStatus] Varchar(255),
      [ProfileImagePath] Varchar(255)
    );
END

-- TeachingHistory table
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'TeachingHistory')
BEGIN
    CREATE TABLE [dbo].[TeachingHistory] (
      [TeachingHistoryId] INT NOT NULL PRIMARY KEY IDENTITY(1,1),
      [UserId] INT NOT NULL,
      [CourseName] VARCHAR(255),
      [CreditHours] INT NULL,
      [CourseNo] INT NULL,
      [SemesterName] VARCHAR(255) NULL
    );

    -- Foreign Key From TeachingHistory to Admin Table
    ALTER TABLE [TeachingHistory]
    ADD CONSTRAINT FK_TeachingHistory_Admin
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Admin] ([UserId]);
END

-- Publications table
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Publications')
BEGIN
    CREATE TABLE [dbo].[Publications] (
      [PublicationId] INT NOT NULL PRIMARY KEY IDENTITY(1,1),
      [UserId] INT NOT NULL,
      [PublicationName] VARCHAR(255),
      [PublicationType] VARCHAR(255),
      [PublicationDate] DATETIME,
      [PublicationLink] VARCHAR(1000) NULL
    );

    -- Foreign Key From Publications to Admin Table
    ALTER TABLE [Publications]
    ADD CONSTRAINT FK_Publications_Admin
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Admin] ([UserId]);
END

-- EducationalBackground table
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'EducationalBackground')
BEGIN
    CREATE TABLE [dbo].[EducationalBackground] (
      [EducationalBackgroundId] INT PRIMARY KEY NOT NULL IDENTITY(1,1),
      [UserId] INT NOT NULL,
      [DegreeTitle] VARCHAR(255) NULL,
      [Specialization] VARCHAR(255) NULL,
      [University] VARCHAR(255) NULL,
      [CountryOfUniversity] VARCHAR(255) NULL,
      [DateOfGraduation] DATE NULL
    );

    -- Foreign Key From Educational background to Admin Table
    ALTER TABLE EducationalBackground
    ADD CONSTRAINT FK_EducationalBackground_Admin
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Admin] ([UserId]);
END

-- GrantsAvailed table
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'GrantsAvailed')
BEGIN
    CREATE TABLE [dbo].[GrantsAvailed] (
      [GrantsAvailedId] INT PRIMARY KEY NOT NULL IDENTITY(1,1),
      [UserId] INT NOT NULL,
      [Title] VARCHAR(255) NULL,
      [Source] VARCHAR(255) NULL,
      [Date] DATETIME,
      [Reason] VARCHAR(255)
    );

    -- Foreign Key From GrantsAvailed to Admin Table
    ALTER TABLE GrantsAvailed
    ADD CONSTRAINT FK_GrantsAvailed_Admin
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Admin] ([UserId]);
END

-- AttendedConferences table
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'AttendedConferences')
BEGIN
    CREATE TABLE [dbo].[AttendedConferences] (
      [AttendedConferencesId] INT PRIMARY KEY NOT NULL IDENTITY(1,1),
      [UserId] INT NOT NULL,
      [Title] VARCHAR(255) NULL,
      [SourceOfFunding] VARCHAR(255) NULL,
      [Date] DATETIME,
      [Reason] VARCHAR(255)
    );

    -- Foreign Key From AttendedConferences to Admin Table
    ALTER TABLE [AttendedConferences]
    ADD CONSTRAINT FK_AttendedConferences_Admin
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Admin] ([UserId]);
END

-- Supervision table
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Supervision')
BEGIN
    CREATE TABLE [dbo].[Supervision] (
      [SupervisionId] INT PRIMARY KEY NOT NULL IDENTITY(1,1),
      [UserId] INT NOT NULL,
      [Name] VARCHAR(255) NULL,
      [Date] DATETIME,
      [Authors] VARCHAR(1000),
      [IsAtHabibUniversity] BIT
    );

    -- Foreign Key From Supervision to Admin Table
    ALTER TABLE Supervision
    ADD CONSTRAINT FK_Supervision_Admin
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Admin] ([UserId]);
END

-- Workshop table
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Workshop')
BEGIN
    CREATE TABLE [dbo].[Workshop] (
      [WorkshopId] INT PRIMARY KEY NOT NULL IDENTITY(1,1),
      [UserId] INT NOT NULL,
      [Title] VARCHAR(255) NULL,
      [Date] DATETIME,
      [Description] VARCHAR(1000),
      [IsAtHabibUniversity] BIT
    );

    -- Foreign Key From Workshop to Admin Table
    ALTER TABLE Workshop
    ADD CONSTRAINT FK_Workshop_Admin
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Admin] ([UserId]);
END

-- CommunityService table
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'CommunityService')
BEGIN
    CREATE TABLE [dbo].[CommunityService] (
      [CommunityServiceId] INT PRIMARY KEY NOT NULL IDENTITY(1,1),
      [UserId] INT NOT NULL,
      [Name] VARCHAR(255) NULL,
      [Date] DATETIME,
      [Description] VARCHAR(1000)
    );

    -- Foreign Key From CommunityService to Admin Table
    ALTER TABLE CommunityService
    ADD CONSTRAINT FK_CommunityService_Admin
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Admin] ([UserId]);
END

-- StaffAppointment table
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'StaffAppointment')
BEGIN
    CREATE TABLE [dbo].[StaffAppointment] (
      [StaffAppointmentId] INT PRIMARY KEY NOT NULL IDENTITY(1,1),
      [UserId] INT NOT NULL,
      [Designation] VARCHAR(255) NULL,
      [TermFrom] VARCHAR(255),
      [TermTo] VARCHAR(255)
    );

    -- Foreign Key From StaffAppointment to Admin Table
    ALTER TABLE StaffAppointment
    ADD CONSTRAINT FK_StaffAppointment_Admin
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Admin] ([UserId]);
END

-- CommittieMembership table
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'CommittieeMembership')
BEGIN
    CREATE TABLE [dbo].[CommittieeMembership] (
      [CommittieeMembershipId] INT PRIMARY KEY NOT NULL IDENTITY(1,1),
      [UserId] INT NOT NULL,
      [CommittieeName] VARCHAR(255) NULL,
      [Designation] VARCHAR(255) NULL,
      [TermFrom] VARCHAR(255),
      [TermTo] VARCHAR(255)
    );

    -- Foreign Key From CommittieMembership to Admin Table
    ALTER TABLE CommittieeMembership
    ADD CONSTRAINT FK_CommittieeMembership_Admin
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Admin] ([UserId]);
END

-- ClubPatronage table
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'ClubPatronage')
BEGIN
    CREATE TABLE [dbo].[ClubPatronage] (
      [ClubPatronageId] INT PRIMARY KEY NOT NULL IDENTITY(1,1),
      [UserId] INT NOT NULL,
      [ClubName] VARCHAR(255) NULL,
      [TermFrom] VARCHAR(255),
      [TermTo] VARCHAR(255)
    );

    -- Foreign Key From ClubPatronage to Admin Table
    ALTER TABLE ClubPatronage
    ADD CONSTRAINT FK_ClubPatronage_Admin
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Admin] ([UserId]);
END
