-- First CS User
INSERT INTO [Admin]
VALUES ('mobeen.movania@habib.edu.pk',  'Mobeen', 'Movania', 'PK', '4240529155987', '2382309', '03319087632', '2017-01-01', 'Full-Time', '/mobeen.jpg', 'DSSE', 'CS', 'Male', '1985-01-01', 1, HASHBYTES('SHA2_256', 'password'));

Declare @UserId Int;
SELECT @UserId = MAX(UserId) FROM [Admin];

-- Inserting into TeachingHistory table
INSERT INTO TeachingHistory (UserId, CourseName, CreditHours, CourseNo, SemesterName)
VALUES (@UserId, 'Introduction to Programming', 3, 'CS101', 'Fall 2023');

-- Inserting into Publications table
INSERT INTO Publications (UserId, PublicationName, PublicationType, PublicationDate, PublicationLink)
VALUES (@UserId, 'Fundamentals of Programming', 'Book Chapter', '2023-12-15', 'http://example.com/fundamentals');

-- Inserting into EducationalBackground table
INSERT INTO EducationalBackground (UserId, DegreeTitle, Specialization, University, CountryOfUniversity, DateOfGraduation)
VALUES (@UserId, 'Bachelor of Science in Computer Science', 'Software Engineering', 'University of XYZ', 'USA', '2022-05-30');

-- Inserting into GrantsAvailed table
INSERT INTO GrantsAvailed (UserId, Title, Source, Date, Reason)
VALUES (@UserId, 'Research Grant on Software Engineering', 'National Science Foundation', '2023-07-20', 'To conduct research on software development');

-- Inserting into AttendedConferences table
INSERT INTO AttendedConferences (UserId, Title, SourceOfFunding, Date, Reason)
VALUES (@UserId, 'International Software Engineering Conference 2023', 'Self-funded', '2023-11-10', 'To present research findings');

-- Inserting into Supervision table
INSERT INTO Supervision (UserId, Name, Date, Authors, [Location])
VALUES (@UserId, 'Supervised Senior Projects', '2024-02-01', 'John Doe, Jane Smith', 'Habib University');

-- Inserting into Workshop table
INSERT INTO Workshop (UserId, Title, Date, Description, [Location])
VALUES (@UserId, 'Advanced Software Engineering Workshop', '2024-03-15', 'In-depth training on software design patterns', 'Habib University');

-- Inserting into CommunityService table
INSERT INTO CommunityService (UserId, Name, Date, Description)
VALUES (@UserId, 'Mentoring High School Students', '2023-09-05', 'Guiding students in developing programming skills');

-- Inserting into StaffAppointment table
INSERT INTO StaffAppointment (UserId, Designation, TermFrom, TermTo)
VALUES (@UserId, 'Assistant Professor', '2023-08-01', '2025-07-31');

-- Inserting into CommittieMembership table
INSERT INTO CommittieeMembership (UserId, CommittieeName, Designation, TermFrom, TermTo)
VALUES (@UserId, 'Computer Science Curriculum Committee', 'Member', '2023-09-01', '2024-08-31');

-- Inserting into ClubPatronage table
INSERT INTO ClubPatronage (UserId, ClubName, TermFrom, TermTo)
VALUES (@UserId, 'Programming Club', '2023-09-01', '2024-08-31');

-- Second CS User
INSERT INTO [Admin]
VALUES ('qasim.pasta@habib.edu.pk', 'Qasim', 'Pasta', 'PK', '42506981234', '7654321', '03134567091', '2009-03-15', 'Full-Time', '/sarah.jpg', 'DSSE', 'CS', 'Male', '1998-05-28', 1, HASHBYTES('SHA2_256', 'password'));

Declare @UserId2 Int;
SELECT @UserId2 = MAX(UserId) FROM [Admin];

-- Inserting into TeachingHistory table
INSERT INTO TeachingHistory (UserId, CourseName, CreditHours, CourseNo, SemesterName)
VALUES (@UserId2, 'Data Structures and Algorithms', 3, 'CS201', 'Spring 2024');

-- Inserting into Publications table
INSERT INTO Publications (UserId, PublicationName, PublicationType, PublicationDate, PublicationLink)
VALUES (@UserId2, 'Advanced Data Structures', 'Journal Article', '2023-11-30', 'http://example.com/advanced-ds');

-- Inserting into EducationalBackground table
INSERT INTO EducationalBackground (UserId, DegreeTitle, Specialization, University, CountryOfUniversity, DateOfGraduation)
VALUES (@UserId2, 'Master of Science in Computer Science', 'Algorithms', 'University of ABC', 'USA', '2021-07-31');

-- Inserting into GrantsAvailed table
INSERT INTO GrantsAvailed (UserId, Title, Source, Date, Reason)
VALUES (@UserId2, 'Algorithm Optimization Research Grant', 'Government of USA', '2023-09-10', 'To optimize algorithms for large datasets');

-- Inserting into AttendedConferences table
INSERT INTO AttendedConferences (UserId, Title, SourceOfFunding, Date, Reason)
VALUES (@UserId2, 'International Algorithms Conference', 'University Fund', '2023-12-20', 'To present findings on algorithmic efficiency');

-- Inserting into Supervision table
INSERT INTO Supervision (UserId, Name, Date, Authors, [Location])
VALUES (@UserId2, 'Supervised Undergraduate Research', '2024-01-15', 'Sarah Smith, Alex Johnson', 'Habib University');

-- Inserting into Workshop table
INSERT INTO Workshop (UserId, Title, Date, Description, [Location])
VALUES (@UserId2, 'Algorithm Design Workshop', '2024-02-20', 'Practical sessions on designing efficient algorithms', 'Habib University');

-- Inserting into CommunityService table
INSERT INTO CommunityService (UserId, Name, Date, Description)
VALUES (@UserId2, 'Mentoring High School Coding Club', '2023-10-01', 'Guiding students in competitive programming');

-- Inserting into StaffAppointment table
INSERT INTO StaffAppointment (UserId, Designation, TermFrom, TermTo)
VALUES (@UserId2, 'Associate Professor', '2022-09-01', '2024-08-31');

-- Inserting into CommittieMembership table
INSERT INTO CommittieeMembership (UserId, CommittieeName, Designation, TermFrom, TermTo)
VALUES (@UserId2, 'Faculty Senate', 'Chairperson', '2022-09-01', '2023-08-31');

-- Inserting into ClubPatronage table
INSERT INTO ClubPatronage (UserId, ClubName, TermFrom, TermTo)
VALUES (@UserId2, 'Algorithm Club', '2022-09-01', '2023-08-31');

-- First CE User
INSERT INTO [Admin]
VALUES ('farhan.khan@habib.edu.pk', 'Farhan', 'Khan', 'PK', '4240134488349', '2139992', '03099876123', '2024-01-20', 'Full-Time', '/farhan.jpg', 'DSSE', 'CE', 'Male', '1999-09-12', 1, HASHBYTES('SHA2_256', 'password'));

Declare @UserId3 Int;
SELECT @UserId3 = MAX(UserId) FROM [Admin];

-- Inserting into TeachingHistory table
INSERT INTO TeachingHistory (UserId, CourseName, CreditHours, CourseNo, SemesterName)
VALUES (@UserId3, 'Computer Architecture', 3, 'CE301', 'Fall 2024');

-- Inserting into Publications table
INSERT INTO Publications (UserId, PublicationName, PublicationType, PublicationDate, PublicationLink)
VALUES (@UserId3, 'Advanced Computer Architecture', 'Journal Article', '2023-10-25', 'http://example.com/advanced-arch');

-- Inserting into EducationalBackground table
INSERT INTO EducationalBackground (UserId, DegreeTitle, Specialization, University, CountryOfUniversity, DateOfGraduation)
VALUES (@UserId3, 'PhD in Computer Engineering', 'Computer Architecture', 'University of XYZ', 'USA', '2020-09-30');

-- Inserting into GrantsAvailed table
INSERT INTO GrantsAvailed (UserId, Title, Source, Date, Reason)
VALUES (@UserId3, 'Computer Architecture Research Grant', 'National Science Foundation', '2023-08-15', 'To develop advanced processor architectures');

-- Inserting into AttendedConferences table
INSERT INTO AttendedConferences (UserId, Title, SourceOfFunding, Date, Reason)
VALUES (@UserId3, 'International Computer Architecture Conference', 'University Grant', '2023-12-05', 'To present findings on novel CPU designs');

-- Inserting into Supervision table
INSERT INTO Supervision (UserId, Name, Date, Authors, [Location])
VALUES (@UserId3, 'Supervised PhD Research', '2024-04-01', 'Michael Brown, Jennifer Lee', 'Habib University');

-- Inserting into Workshop table
INSERT INTO Workshop (UserId, Title, Date, Description, [Location])
VALUES (@UserId3, 'VLSI Design Workshop', '2024-05-10', 'Hands-on training on designing VLSI circuits', 'Habib University');

-- Inserting into CommunityService table
INSERT INTO CommunityService (UserId, Name, Date, Description)
VALUES (@UserId3, 'STEM Outreach Program', '2023-11-10', 'Conducting workshops on electronics for school children');

-- Inserting into StaffAppointment table
INSERT INTO StaffAppointment (UserId, Designation, TermFrom, TermTo)
VALUES (@UserId3, 'Assistant Professor', '2021-10-01', '2023-09-30');

-- Inserting into CommittieMembership table
INSERT INTO CommittieeMembership (UserId, CommittieeName, Designation, TermFrom, TermTo)
VALUES (@UserId3, 'Computer Engineering Curriculum Committee', 'Member', '2021-10-01', '2023-09-30');

-- Inserting into ClubPatronage table
INSERT INTO ClubPatronage (UserId, ClubName, TermFrom, TermTo)
VALUES (@UserId3, 'Computer Engineering Society', '2021-10-01', '2023-09-30');

-- Second CE User
INSERT INTO [Admin]
VALUES ('umer.tariq@habib.edu.pk', 'Umer', 'Tariq', 'IN', '4240190876013', '3332222', '03456789321', '2022-07-10', 'Visiting', '/umer.jpg', 'DSSE', 'CE',  'Male', '1970-01-01', 1, HASHBYTES('SHA2_256', 'password'));

Declare @UserId4 Int;
SELECT @UserId4 = MAX(UserId) FROM [Admin];

-- Inserting into TeachingHistory table
INSERT INTO TeachingHistory (UserId, CourseName, CreditHours, CourseNo, SemesterName)
VALUES (@UserId4, 'Digital Electronics', 3, 'CE401', 'Spring 2025');

-- Inserting into Publications table
INSERT INTO Publications (UserId, PublicationName, PublicationType, PublicationDate, PublicationLink)
VALUES (@UserId4, 'Digital System Design', 'Conference Paper', '2023-09-20', 'http://example.com/digital-design');

-- Inserting into EducationalBackground table
INSERT INTO EducationalBackground (UserId, DegreeTitle, Specialization, University, CountryOfUniversity, DateOfGraduation)
VALUES (@UserId4, 'Bachelor of Engineering in Electrical Engineering', 'Digital Systems', 'University of GHI', 'USA', '2021-12-20');

-- Inserting into GrantsAvailed table
INSERT INTO GrantsAvailed (UserId, Title, Source, Date, Reason)
VALUES (@UserId4, 'Digital System Design Grant', 'U.S. Department of Defense', '2023-05-05', 'To develop secure communication systems');

-- Inserting into AttendedConferences table
INSERT INTO AttendedConferences (UserId, Title, SourceOfFunding, Date, Reason)
VALUES (@UserId4, 'International Digital Design Conference', 'University Grant', '2023-10-10', 'To present on FPGA-based designs');

-- Inserting into Supervision table
INSERT INTO Supervision (UserId, Name, Date, Authors, [Location])
VALUES (@UserId4, 'Supervised Capstone Projects', '2024-06-01', 'Jennifer Lee, Mark Taylor', 'Habib University');

-- Inserting into Workshop table
INSERT INTO Workshop (UserId, Title, Date, Description, [Location])
VALUES (@UserId4, 'FPGA Programming Workshop', '2024-07-15', 'Practical sessions on Verilog and VHDL', 'Habib University');

-- Inserting into CommunityService table
INSERT INTO CommunityService (UserId, Name, Date, Description)
VALUES (@UserId4, 'STEM Education Advocacy', '2023-08-15', 'Promoting STEM education in local schools');

-- Inserting into StaffAppointment table
INSERT INTO StaffAppointment (UserId, Designation, TermFrom, TermTo)
VALUES (@UserId4, 'Associate Professor', '2022-01-01', '2024-12-31');

-- Inserting into CommittieMembership table
INSERT INTO CommittieeMembership (UserId, CommittieeName, Designation, TermFrom, TermTo)
VALUES (@UserId4, 'Research Committee', 'Chair', '2022-01-01', '2024-12-31');

-- Inserting into ClubPatronage table
INSERT INTO ClubPatronage (UserId, ClubName, TermFrom, TermTo)
VALUES (@UserId4, 'Electronics Club', '2022-01-01', '2024-12-31');

-- First EE User
INSERT INTO [Admin]
VALUES ('shahid.shaikh@habib.edu.pk', 'Shahid', 'Shaikh', 'CA', '42401123222', '2139992', '03093716123', '2015-03-20', 'Full-Time', '/shahhid.jpg', 'DSSE', 'EE', 'Male', '1955-06-06', 1, HASHBYTES('SHA2_256', 'password'));

Declare @UserId5 Int;
SELECT @UserId5 = MAX(UserId) FROM [Admin];

-- Inserting into TeachingHistory table
INSERT INTO TeachingHistory (UserId, CourseName, CreditHours, CourseNo, SemesterName)
VALUES (@UserId5, 'Power System Analysis', 3, 'EE301', 'Fall 2024');

-- Inserting into Publications table
INSERT INTO Publications (UserId, PublicationName, PublicationType, PublicationDate, PublicationLink)
VALUES (@UserId5, 'Advanced Power System Analysis', 'Journal Article', '2023-10-25', 'http://example.com/advanced-power-analysis');

-- Inserting into EducationalBackground table
INSERT INTO EducationalBackground (UserId, DegreeTitle, Specialization, University, CountryOfUniversity, DateOfGraduation)
VALUES (@UserId5, 'PhD in Electrical Engineering', 'Power Systems', 'University of XYZ', 'USA', '2020-09-30');

-- Inserting into GrantsAvailed table
INSERT INTO GrantsAvailed (UserId, Title, Source, Date, Reason)
VALUES (@UserId5, 'Power System Research Grant', 'National Science Foundation', '2023-08-15', 'To develop advanced power system models');

-- Inserting into AttendedConferences table
INSERT INTO AttendedConferences (UserId, Title, SourceOfFunding, Date, Reason)
VALUES (@UserId5, 'International Power Engineering Conference', 'University Grant', '2023-12-05', 'To present findings on renewable energy integration');

-- Inserting into Supervision table
INSERT INTO Supervision (UserId, Name, Date, Authors, [Location])
VALUES (@UserId5, 'Supervised PhD Research', '2024-04-01', 'Michael Brown, Jennifer Lee', 'Habib University');

-- Inserting into Workshop table
INSERT INTO Workshop (UserId, Title, Date, Description, [Location])
VALUES (@UserId5, 'Renewable Energy Workshop', '2024-05-10', 'Hands-on training on wind and solar power systems', 'Habib University');

-- Inserting into CommunityService table
INSERT INTO CommunityService (UserId, Name, Date, Description)
VALUES (@UserId5, 'Energy Conservation Campaign', '2023-11-10', 'Promoting energy-saving practices in local communities');

-- Inserting into StaffAppointment table
INSERT INTO StaffAppointment (UserId, Designation, TermFrom, TermTo)
VALUES (@UserId5, 'Assistant Professor', '2021-10-01', '2023-09-30');

-- Inserting into CommittieMembership table
INSERT INTO CommittieeMembership (UserId, CommittieeName, Designation, TermFrom, TermTo)
VALUES (@UserId5, 'Electrical Engineering Curriculum Committee', 'Member', '2021-10-01', '2023-09-30');

-- Inserting into ClubPatronage table
INSERT INTO ClubPatronage (UserId, ClubName, TermFrom, TermTo)
VALUES (@UserId5, 'Electrical Engineering Society', '2021-10-01', '2023-09-30');

-- Second EE User
INSERT INTO [Admin]
VALUES ('tariq.kamal@habib.edu.pk', 'Tariq', 'Kamal', 'USA', '4240134678013', '3355222', '03092377321', '2018-01-10', 'Visiting', '/umer.jpg', 'DSSE', 'EE', 'Male', '1976-03-17', 1, HASHBYTES('SHA2_256', 'password'));

Declare @UserId6 Int;
SELECT @UserId6 = MAX(UserId) FROM [Admin];

-- Inserting into TeachingHistory table
INSERT INTO TeachingHistory (UserId, CourseName, CreditHours, CourseNo, SemesterName)
VALUES (@UserId6, 'Electrical Machines', 3, 'EE401', 'Spring 2025');

-- Inserting into Publications table
INSERT INTO Publications (UserId, PublicationName, PublicationType, PublicationDate, PublicationLink)
VALUES (@UserId6, 'Advanced Electrical Machines', 'Conference Paper', '2023-09-20', 'http://example.com/advanced-machines');

-- Inserting into EducationalBackground table
INSERT INTO EducationalBackground (UserId, DegreeTitle, Specialization, University, CountryOfUniversity, DateOfGraduation)
VALUES (@UserId6, 'Bachelor of Engineering in Electrical Engineering', 'Power Electronics', 'University of GHI', 'USA', '2021-12-20');

-- Inserting into GrantsAvailed table
INSERT INTO GrantsAvailed (UserId, Title, Source, Date, Reason)
VALUES (@UserId6, 'Power Electronics Research Grant', 'U.S. Department of Defense', '2023-05-05', 'To develop efficient power converters');

-- Inserting into AttendedConferences table
INSERT INTO AttendedConferences (UserId, Title, SourceOfFunding, Date, Reason)
VALUES (@UserId6, 'International Power Electronics Conference', 'University Grant', '2023-10-10', 'To present on high-frequency converters');

-- Inserting into Supervision table
INSERT INTO Supervision (UserId, Name, Date, Authors, [Location])
VALUES (@UserId6, 'Supervised Capstone Projects', '2024-06-01', 'Jennifer Lee, Mark Taylor', 'Habib University');

-- Inserting into Workshop table
INSERT INTO Workshop (UserId, Title, Date, Description, [Location])
VALUES (@UserId6, 'Power Electronics Design Workshop', '2024-07-15', 'Practical sessions on designing power electronic circuits', 'Habib University');

-- Inserting into CommunityService table
INSERT INTO CommunityService (UserId, Name, Date, Description)
VALUES (@UserId6, 'Electrical Safety Awareness', '2023-08-15', 'Conducting seminars on electrical safety measures');

-- Inserting into StaffAppointment table
INSERT INTO StaffAppointment (UserId, Designation, TermFrom, TermTo)
VALUES (@UserId6, 'Associate Professor', '2022-01-01', '2024-12-31');

-- Inserting into CommittieMembership table
INSERT INTO CommittieeMembership (UserId, CommittieeName, Designation, TermFrom, TermTo)
VALUES (@UserId6, 'Research Committee', 'Chair', '2022-01-01', '2024-12-31');

-- Inserting into ClubPatronage table
INSERT INTO ClubPatronage (UserId, ClubName, TermFrom, TermTo)
VALUES (@UserId6, 'Power Electronics Club', '2022-01-01', '2024-12-31');

-- Add valid term to and from
UPDATE CommittieeMembership
Set TermFrom = 'Fall 2023', TermTo = 'Spring 2024';

UPDATE ClubPatronage
Set TermFrom = 'Fall 2022', TermTo = 'Spring 2023';

UPDATE StaffAppointment
Set TermFrom = 'Fall 2021', TermTo = 'Spring 2022';