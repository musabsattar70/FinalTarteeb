

ALTER TABLE TeachingHistory
ALTER COLUMN CourseNo	Varchar(10);


/* ---- ADDED ON 22/04/2024 (Added Degree and Program) ---- */

-- START HERE

ALTER TABLE [Admin]
ADD School VARCHAR(10), Program VARCHAR(10);

-- END HERE


/* ---- ADDED ON 22/04/2024 (Added Gender, Date of Birth, Column) ---- */

-- START HERE

ALTER TABLE [Admin]
ADD Gender VARCHAR(25), DateOfBirth Date;

EXEC sp_rename 'Admin.OnboardingStatus', 'FacultyType', 'COLUMN';

ALTER TABLE [Admin]
ALTER COLUMN CNIC Varchar(25);

ALTER TABLE [Admin]
ALTER COLUMN PhoneNumber Varchar(25);

-- END HERE

/* ---- ADDED ON 06/05/2024 (Changes External to Save Location) ---- */

-- START HERE

ALTER TABLE [Workshop]
DROP COLUMN IsAtHabibUniversity;

ALTER TABLE [Workshop]
ADD [Location] VARCHAR(100);

ALTER TABLE [Supervision]
DROP COLUMN IsAtHabibUniversity;

ALTER TABLE [Supervision]
ADD [Location] VARCHAR(100);

ALTER TABLE [Admin]
ADD RoleId INT;

ALTER TABLE [Admin]
DROP COLUMN [Password];

ALTER TABLE [Admin]
ADD [Password] VARBINARY(32);

-- END HERE