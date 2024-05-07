-- First CND User
INSERT INTO [Admin]
VALUES ('muneera.batool@habib.edu.pk', 'Muneera', 'Batool', 'PK', '4240134483339', '-', '03099357223', '2020-08-15', 'Full-Time', '/muneera.jpg', 'AHSS', 'CND', 'Female', '1989-01-15', 1, HASHBYTES('SHA2_256', 'password'));

Declare @UserId1 Int;
SELECT @UserId1 = MAX(UserId) FROM [Admin];

-- Inserting into TeachingHistory table
INSERT INTO TeachingHistory (UserId, CourseName, CreditHours, CourseNo, SemesterName)
VALUES (@UserId1, 'Visual Communication Design', 3, 'CD301', 'Fall 2024');

-- Inserting into Publications table
INSERT INTO Publications (UserId, PublicationName, PublicationType, PublicationDate, PublicationLink)
VALUES (@UserId1, 'Designing for User Experience', 'Journal Article', '2023-10-25', 'http://example.com/design-user-experience');

-- Inserting into EducationalBackground table
INSERT INTO EducationalBackground (UserId, DegreeTitle, Specialization, University, CountryOfUniversity, DateOfGraduation)
VALUES (@UserId1, 'Masters in Visual Communication Design', 'User Interface Design', 'University of XYZ', 'USA', '2020-09-30');

-- Inserting into GrantsAvailed table
INSERT INTO GrantsAvailed (UserId, Title, Source, Date, Reason)
VALUES (@UserId1, 'Visual Communication Research Grant', 'National Endowment for the Arts', '2023-08-15', 'To develop innovative visual communication strategies');

-- Inserting into AttendedConferences table
INSERT INTO AttendedConferences (UserId, Title, SourceOfFunding, Date, Reason)
VALUES (@UserId1, 'International Design Conference', 'University Grant', '2023-12-05', 'To present findings on visual communication trends');

-- Inserting into Supervision table
INSERT INTO Supervision (UserId, Name, Date, Authors, [Location])
VALUES (@UserId1, 'Supervised Visual Design Projects', '2024-04-01', 'Michael Brown, Jennifer Lee', 'Habib University');

-- Inserting into Workshop table
INSERT INTO Workshop (UserId, Title, Date, Description, [Location])
VALUES (@UserId1, 'User Interface Design Workshop', '2024-05-10', 'Hands-on training on designing user-friendly interfaces', 'Habib University');

-- Inserting into CommunityService table
INSERT INTO CommunityService (UserId, Name, Date, Description)
VALUES (@UserId1, 'Design Thinking Workshop', '2023-11-10', 'Conducting workshops on design thinking for social impact');

-- Inserting into StaffAppointment table
INSERT INTO StaffAppointment (UserId, Designation, TermFrom, TermTo)
VALUES (@UserId1, 'Assistant Professor', '2021-10-01', '2023-09-30');

-- Inserting into CommitteeMembership table
INSERT INTO CommittieeMembership (UserId, CommittieeName, Designation, TermFrom, TermTo)
VALUES (@UserId1, 'Visual Communication Design Committee', 'Member', '2021-10-01', '2023-09-30');

-- Inserting into ClubPatronage table
INSERT INTO ClubPatronage (UserId, ClubName, TermFrom, TermTo)
VALUES (@UserId1, 'Design Club', '2021-10-01', '2023-09-30');

-- Second CND User
INSERT INTO [Admin]
VALUES ('rohama.malik@habib.edu.pk', 'Rohama', 'Malik', 'PK', '4240191276013', '-', '03456700021', '2023-08-10', 'On-Leave', '/rohama.jpg', 'AHSS', 'CND', 'Female', '1980-09-23', 1, HASHBYTES('SHA2_256', 'password'));

Declare @UserId2 Int;
SELECT @UserId2 = MAX(UserId) FROM [Admin];

-- Inserting into TeachingHistory table
INSERT INTO TeachingHistory (UserId, CourseName, CreditHours, CourseNo, SemesterName)
VALUES (@UserId2, 'Digital Media Production', 3, 'CD401', 'Spring 2025');

-- Inserting into Publications table
INSERT INTO Publications (UserId, PublicationName, PublicationType, PublicationDate, PublicationLink)
VALUES (@UserId2, 'Digital Storytelling Techniques', 'Conference Paper', '2023-09-20', 'http://example.com/digital-storytelling');

-- Inserting into EducationalBackground table
INSERT INTO EducationalBackground (UserId, DegreeTitle, Specialization, University, CountryOfUniversity, DateOfGraduation)
VALUES (@UserId2, 'Bachelor of Arts in Media Studies', 'Digital Media Production', 'University of GHI', 'USA', '2021-12-20');

-- Inserting into GrantsAvailed table
INSERT INTO GrantsAvailed (UserId, Title, Source, Date, Reason)
VALUES (@UserId2, 'Digital Media Production Grant', 'U.S. Department of Education', '2023-05-05', 'To produce educational media content');

-- Inserting into AttendedConferences table
INSERT INTO AttendedConferences (UserId, Title, SourceOfFunding, Date, Reason)
VALUES (@UserId2, 'International Media Production Conference', 'University Grant', '2023-10-10', 'To present on digital media trends');

-- Inserting into Supervision table
INSERT INTO Supervision (UserId, Name, Date, Authors, [Location])
VALUES (@UserId2, 'Supervised Media Production Projects', '2024-06-01', 'Jennifer Lee, Mark Taylor', 'Habib University');

-- Inserting into Workshop table
INSERT INTO Workshop (UserId, Title, Date, Description, [Location])
VALUES (@UserId2, 'Digital Content Creation Workshop', '2024-07-15', 'Practical sessions on producing digital content', 'Habib University');

-- Inserting into CommunityService table
INSERT INTO CommunityService (UserId, Name, Date, Description)
VALUES (@UserId2, 'Media Literacy Campaign', '2023-08-15', 'Promoting media literacy among youth');

-- Inserting into StaffAppointment table
INSERT INTO StaffAppointment (UserId, Designation, TermFrom, TermTo)
VALUES (@UserId2, 'Associate Professor', '2022-01-01', '2024-12-31');

-- Inserting into CommitteeMembership table
INSERT INTO CommittieeMembership (UserId, CommittieeName, Designation, TermFrom, TermTo)
VALUES (@UserId2, 'Media Studies Committee', 'Chair', '2022-01-01', '2024-12-31');

-- Inserting into ClubPatronage table
INSERT INTO ClubPatronage (UserId, ClubName, TermFrom, TermTo)
VALUES (@UserId2, 'Media Production Club', '2022-01-01', '2024-12-31');


-- First SDP User (previously CH)
INSERT INTO [Admin]
VALUES ('muneera.batool@habib.edu.pk', 'Muneera', 'Batool', 'PK', '4240134483339', '-', '03099357223', '2020-08-15', 'Full-Time', '/muneera.jpg', 'AHSS', 'SDP', 'Female', '1989-01-15',1, HASHBYTES('SHA2_256', 'password'));

Declare @UserId3 Int;
SELECT @UserId3 = MAX(UserId) FROM [Admin];

-- Inserting into TeachingHistory table
INSERT INTO TeachingHistory (UserId, CourseName, CreditHours, CourseNo, SemesterName)
VALUES (@UserId3, 'Social Policy Analysis', 3, 'SDP301', 'Fall 2024');

-- Inserting into Publications table
INSERT INTO Publications (UserId, PublicationName, PublicationType, PublicationDate, PublicationLink)
VALUES (@UserId3, 'Advanced Social Policy', 'Journal Article', '2023-10-25', 'http://example.com/advanced-sdp');

-- Inserting into EducationalBackground table
INSERT INTO EducationalBackground (UserId, DegreeTitle, Specialization, University, CountryOfUniversity, DateOfGraduation)
VALUES (@UserId3, 'PhD in Comparative Literature', 'Social Policy', 'University of XYZ', 'USA', '2020-09-30');

-- Inserting into GrantsAvailed table
INSERT INTO GrantsAvailed (UserId, Title, Source, Date, Reason)
VALUES (@UserId3, 'Social Policy Research Grant', 'National Science Foundation', '2023-08-15', 'To develop advanced social policy models');

-- Inserting into AttendedConferences table
INSERT INTO AttendedConferences (UserId, Title, SourceOfFunding, Date, Reason)
VALUES (@UserId3, 'International Social Development Conference', 'University Grant', '2023-12-05', 'To present findings on social policy analysis');

-- Inserting into Supervision table
INSERT INTO Supervision (UserId, Name, Date, Authors, [Location])
VALUES (@UserId3, 'Supervised SDP Research', '2024-04-01', 'Michael Brown, Jennifer Lee', 'Habib University');

-- Inserting into Workshop table
INSERT INTO Workshop (UserId, Title, Date, Description, [Location])
VALUES (@UserId3, 'Policy Formulation Workshop', '2024-05-10', 'Hands-on training on developing policy frameworks', 'Habib University');

-- Inserting into CommunityService table
INSERT INTO CommunityService (UserId, Name, Date, Description)
VALUES (@UserId3, 'Community Outreach Program', '2023-11-10', 'Engaging with local communities for policy feedback');

-- Inserting into StaffAppointment table
INSERT INTO StaffAppointment (UserId, Designation, TermFrom, TermTo)
VALUES (@UserId3, 'Assistant Professor', '2021-10-01', '2023-09-30');

-- Inserting into CommitteeMembership table
INSERT INTO CommittieeMembership (UserId, CommittieeName, Designation, TermFrom, TermTo)
VALUES (@UserId3, 'SDP Curriculum Committee', 'Member', '2021-10-01', '2023-09-30');

-- Inserting into ClubPatronage table
INSERT INTO ClubPatronage (UserId, ClubName, TermFrom, TermTo)
VALUES (@UserId3, 'Social Development Society', '2021-10-01', '2023-09-30');

-- Second SDP User (previously EE)
INSERT INTO [Admin]
VALUES ('coline.ferrant@habib.edu.pk', 'Coline', 'Ferrant', 'FR', '4240500055987', '-', '03343267632', '2024-01-01', 'Visiting', '/coline.jpg', 'AHSS', 'SDP', 'Female', '1925-02-21',1, HASHBYTES('SHA2_256', 'password'));

Declare @UserId4 Int;
SELECT @UserId4 = MAX(UserId) FROM [Admin];

-- Inserting into TeachingHistory table
INSERT INTO TeachingHistory (UserId, CourseName, CreditHours, CourseNo, SemesterName)
VALUES (@UserId4, 'Social Research Methods', 3, 'SDP401', 'Spring 2025');

-- Inserting into Publications table
INSERT INTO Publications (UserId, PublicationName, PublicationType, PublicationDate, PublicationLink)
VALUES (@UserId4, 'Advanced Social Research', 'Conference Paper', '2023-09-20', 'http://example.com/advanced-sdp-research');

-- Inserting into EducationalBackground table
INSERT INTO EducationalBackground (UserId, DegreeTitle, Specialization, University, CountryOfUniversity, DateOfGraduation)
VALUES (@UserId4, 'Master of Social Sciences', 'Development Studies', 'University of GHI', 'USA', '2021-12-20');

-- Inserting into GrantsAvailed table
INSERT INTO GrantsAvailed (UserId, Title, Source, Date, Reason)
VALUES (@UserId4, 'Social Research Grant', 'U.S. Department of Education', '2023-05-05', 'To conduct social development research');

-- Inserting into AttendedConferences table
INSERT INTO AttendedConferences (UserId, Title, SourceOfFunding, Date, Reason)
VALUES (@UserId4, 'International Development Conference', 'University Fund', '2023-10-10', 'To present on development challenges');

-- Inserting into Supervision table
INSERT INTO Supervision (UserId, Name, Date, Authors, [Location])
VALUES (@UserId4, 'Supervised SDP Capstone Projects', '2024-06-01', 'Jennifer Lee, Mark Taylor', 'Habib University');

-- Inserting into Workshop table
INSERT INTO Workshop (UserId, Title, Date, Description, [Location])
VALUES (@UserId4, 'Policy Analysis Workshop', '2024-07-15', 'Practical sessions on analyzing policy impacts', 'Habib University');

-- Inserting into CommunityService table
INSERT INTO CommunityService (UserId, Name, Date, Description)
VALUES (@UserId4, 'NGO Volunteering', '2023-08-15', 'Working with NGOs on social development projects');

-- Inserting into StaffAppointment table
INSERT INTO StaffAppointment (UserId, Designation, TermFrom, TermTo)
VALUES (@UserId4, 'Associate Professor', '2022-01-01', '2024-12-31');

-- Inserting into CommitteeMembership table
INSERT INTO CommittieeMembership (UserId, CommittieeName, Designation, TermFrom, TermTo)
VALUES (@UserId4, 'Research Ethics Committee', 'Member', '2022-01-01', '2024-12-31');

-- Inserting into ClubPatronage table
INSERT INTO ClubPatronage (UserId, ClubName, TermFrom, TermTo)
VALUES (@UserId4, 'Development Society', '2022-01-01', '2024-12-31');


-- First CH User
INSERT INTO [Admin]
VALUES ('nauman.naqvi@habib.edu.pk', 'Nauman', 'Naqvi', 'IN', '42401113222', '-', '03043609123', '2019-03-20', 'Full-Time', '/nauman.jpg', 'AHSS', 'CH', 'Male', '1985-08-01',1, HASHBYTES('SHA2_256', 'password'));

Declare @UserId5 Int;
SELECT @UserId5 = MAX(UserId) FROM [Admin];

-- Inserting into TeachingHistory table
INSERT INTO TeachingHistory (UserId, CourseName, CreditHours, CourseNo, SemesterName)
VALUES (@UserId5, 'Introduction to Comparative Literature', 3, 'CH301', 'Fall 2024');

-- Inserting into Publications table
INSERT INTO Publications (UserId, PublicationName, PublicationType, PublicationDate, PublicationLink)
VALUES (@UserId5, 'Comparative Literature and Society', 'Journal Article', '2023-10-25', 'http://example.com/comparative-literature');

-- Inserting into EducationalBackground table
INSERT INTO EducationalBackground (UserId, DegreeTitle, Specialization, University, CountryOfUniversity, DateOfGraduation)
VALUES (@UserId5, 'PhD in Comparative Literature', 'Comparative Literature', 'University of XYZ', 'USA', '2020-09-30');

-- Inserting into GrantsAvailed table
INSERT INTO GrantsAvailed (UserId, Title, Source, Date, Reason)
VALUES (@UserId5, 'Literary Research Grant', 'National Endowment for the Humanities', '2023-08-15', 'To conduct comparative literature research');

-- Inserting into AttendedConferences table
INSERT INTO AttendedConferences (UserId, Title, SourceOfFunding, Date, Reason)
VALUES (@UserId5, 'International Comparative Literature Conference', 'University Grant', '2023-12-05', 'To present findings on comparative literature analysis');

-- Inserting into Supervision table
INSERT INTO Supervision (UserId, Name, Date, Authors, [Location])
VALUES (@UserId5, 'Supervised Comparative Literature Projects', '2024-04-01', 'Michael Brown, Jennifer Lee', 'Habib University');

-- Inserting into Workshop table
INSERT INTO Workshop (UserId, Title, Date, Description, [Location])
VALUES (@UserId5, 'Comparative Literature Workshop', '2024-05-10', 'Hands-on training on comparative literary analysis', 'Habib University');

-- Inserting into CommunityService table
INSERT INTO CommunityService (UserId, Name, Date, Description)
VALUES (@UserId5, 'Literacy Campaign', '2023-11-10', 'Promoting literacy in local communities through literature');

-- Inserting into StaffAppointment table
INSERT INTO StaffAppointment (UserId, Designation, TermFrom, TermTo)
VALUES (@UserId5, 'Assistant Professor', '2021-10-01', '2023-09-30');

-- Inserting into CommitteeMembership table
INSERT INTO CommittieeMembership (UserId, CommittieeName, Designation, TermFrom, TermTo)
VALUES (@UserId5, 'CH Curriculum Committee', 'Member', '2021-10-01', '2023-09-30');

-- Inserting into ClubPatronage table
INSERT INTO ClubPatronage (UserId, ClubName, TermFrom, TermTo)
VALUES (@UserId5, 'Comparative Literature Society', '2021-10-01', '2023-09-30');

-- Second CH User
INSERT INTO [Admin]
VALUES ('muhammad.haris@habib.edu.pk', 'Muhammad', 'Haris', 'RU', '4240121177823', '-', '03047779123', '2018-08-08', 'Full-Time', '/nauman.jpg', 'AHSS', 'CH', 'Male', '1988-11-04', 1,HASHBYTES('SHA2_256', 'password'));

Declare @UserId6 Int;
SELECT @UserId6 = MAX(UserId) FROM [Admin];

-- Inserting into TeachingHistory table
INSERT INTO TeachingHistory (UserId, CourseName, CreditHours, CourseNo, SemesterName)
VALUES (@UserId6, 'Introduction to Cultural Studies', 3, 'CH401', 'Spring 2025');

-- Inserting into Publications table
INSERT INTO Publications (UserId, PublicationName, PublicationType, PublicationDate, PublicationLink)
VALUES (@UserId6, 'Advanced Cultural Studies', 'Conference Paper', '2023-09-20', 'http://example.com/advanced-cultural-studies');

-- Inserting into EducationalBackground table
INSERT INTO EducationalBackground (UserId, DegreeTitle, Specialization, University, CountryOfUniversity, DateOfGraduation)
VALUES (@UserId6, 'Master of Arts in Comparative Literature', 'Cultural Studies', 'University of GHI', 'USA', '2021-12-20');

-- Inserting into GrantsAvailed table
INSERT INTO GrantsAvailed (UserId, Title, Source, Date, Reason)
VALUES (@UserId6, 'Cultural Studies Research Grant', 'National Endowment for the Arts', '2023-05-05', 'To conduct cultural studies research');

-- Inserting into AttendedConferences table
INSERT INTO AttendedConferences (UserId, Title, SourceOfFunding, Date, Reason)
VALUES (@UserId6, 'International Cultural Studies Conference', 'University Grant', '2023-10-10', 'To present on cultural studies perspectives');

-- Inserting into Supervision table
INSERT INTO Supervision (UserId, Name, Date, Authors, [Location])
VALUES (@UserId6, 'Supervised Cultural Studies Projects', '2024-06-01', 'Jennifer Lee, Mark Taylor', 'Habib University');

-- Inserting into Workshop table
INSERT INTO Workshop (UserId, Title, Date, Description, [Location])
VALUES (@UserId6, 'Cultural Studies Workshop', '2024-07-15', 'Practical sessions on cultural analysis methods', 'Habib University');

-- Inserting into CommunityService table
INSERT INTO CommunityService (UserId, Name, Date, Description)
VALUES (@UserId6, 'Cultural Exchange Program', '2023-08-15', 'Organizing events to promote cultural understanding');

-- Inserting into StaffAppointment table
INSERT INTO StaffAppointment (UserId, Designation, TermFrom, TermTo)
VALUES (@UserId6, 'Associate Professor', '2022-01-01', '2024-12-31');

-- Inserting into CommitteeMembership table
INSERT INTO CommittieeMembership (UserId, CommittieeName, Designation, TermFrom, TermTo)
VALUES (@UserId6, 'Research Committee', 'Chair', '2022-01-01', '2024-12-31');

-- Inserting into ClubPatronage table
INSERT INTO ClubPatronage (UserId, ClubName, TermFrom, TermTo)
VALUES (@UserId6, 'Cultural Studies Club', '2022-01-01', '2024-12-31');

-- Add valid term to and from
UPDATE CommittieeMembership
Set TermFrom = 'Fall 2023', TermTo = 'Spring 2024';

UPDATE ClubPatronage
Set TermFrom = 'Fall 2022', TermTo = 'Spring 2023';

UPDATE StaffAppointment
Set TermFrom = 'Fall 2021', TermTo = 'Spring 2022';