# Introduction to Reqit

Reqit is a simple way to describe course and program requirements in the appiversity Catalog. This guide will help you understand how to use Reqit to express prerequisites and other conditions in an easy-to-follow format.

## 1. Understanding Basic Reqit Expressions
Reqit statements describe what courses or programs a student needs to take before enrolling in another course or completing a program. These statements use simple rules and keywords to express conditions.

### 1.1 Basic Operators
Reqit expressions rely on a few key symbols:
- **=** means "is equal to"
- **<, >, <=, >=** mean "less than" or "greater than"
- **AND** means "both conditions must be met"
- **OR** means "at least one condition must be met"
- **ANY** means "one or more from a list must be met"
- **ALL** means "every condition in the set must be met"

### 1.2 Course and Program Attributes
Courses and programs can be specified in different ways:
- **By Subject and Number:** `Course=CMPS.147` means "Computer Science 147"
- **By Subject Only:** `Course.Subject=MATH` means "any Math course"
- **By Credits:** `Course.Credits>=3` means "any course worth at least 3 credits"
- **By Minimum Grade:** `Course=CMPS.231[mg=75]` means "CMPS 231 with a minimum grade of 75"
- **By Standardized Test Score:** `Test=SAT.Math[score>=650]` means "a Math SAT score of at least 650"
- **By Program Completion:** `Program=CybersecurityBS` means "completion of the Cybersecurity Bachelor’s program"

## 2. Writing Course and Program Prerequisites
Let’s look at how prerequisites are written in Reqit.

### 2.1 Simple Prerequisites
- **CMPS 147 - Computer Science 1**: Requires a MATH course numbered between 100 and 200
  - `Reqit: OR(AND(Course.Subject=MATH Course.Number<200 Course.Number>=100))`

- **CMPS 148 - Computer Science 2**: Requires CMPS 147 with a minimum grade of 70
  - `Reqit: Course=CMPS.147[mg=70]`

### 2.2 Multiple Course Requirements
- **CMPS 311 - Operating Systems**: Requires three specific courses (CRWT 102, CMPS 220, and CMPS 231) and either MATH 205 or MATH 237
  - `Reqit: AND(ALL(SET(Course=CMPS.220 Course=CMPS.231 Course=CRWT.102)) ANY(SET(Course=MATH.205 Course=MATH.237)))`

### 2.3 Choosing from Multiple Options
- **CMPS 240 - Data Analytics in Python**: Requires either CMPS 148 with a minimum grade of 70, or CMPS 130
  - `Reqit: OR(Course=CMPS.148[mg=70] Course=CMPS.130)`

- **CMPS 305 - Cyber Security**: Requires either CMPS 231 or CMPS 240
  - `Reqit: OR(Course=CMPS.231 Course=CMPS.240)`

### 2.4 Complex Requirements
- **CMPS 331 - Artificial Intelligence**: Requires either CMPS 231 or CMPS 240, plus either MATH 205 or MATH 237
  - `Reqit: AND(OR(Course=CMPS.231 Course=CMPS.240) ANY(SET(Course=MATH.205 Course=MATH.237)))`

- **CMPS 375 - Mobile Robotics**: Requires at least one course from a list of advanced topics
  - `Reqit: ANY(OR(Course=CMPS.311 Course=CMPS.315 Course=CMPS.331 Course=CMPS.342 Course=CMPS.345 Course=CMPS.361 Course=CMPS.373))`

- **MATH 225 - Multivariable Calculus**: Requires MATH 122
  - `Reqit: Course=MATH.122`

### 2.5 Program-Level Requirements
Reqit can also define requirements at the program level:
- **Cybersecurity BS Program**: Requires completion of CMPS 311, CMPS 305, and CMPS 375, plus 12 credits of CMPS electives
  - `Reqit: AND(ALL(SET(Course=CMPS.311 Course=CMPS.305 Course=CMPS.375)) CREDITS(Course.Subject=CMPS)>=12)`

- **Data Science Certificate**: Requires completion of at least 3 DATA courses and a statistics course
  - `Reqit: AND(COUNT(Course.Subject=DATA)>=3 Course.Subject=STAT)`

## 3. Advanced Reqit Expressions
### 3.1 Counting and Credit Requirements
Reqit allows for conditions based on the number of courses or total credits:
- `COUNT(Course.Subject=CSCI) >= 2` → Must take at least 2 CSCI courses
- `CREDITS(Course.Subject=MATH) >= 12` → Must complete at least 12 credits in MATH courses

### 3.2 Selecting Courses from Multiple Categories
- `FROM_EACH([Course.Subject=CSCI, Course.Subject=MATH])` → Requires at least one course from both Computer Science and Math
- `FROM_AT_LEAST(2, [Course.Subject=CSCI, Course.Subject=MATH, Course.Subject=STAT])` → Requires courses from at least two of these subjects

### 3.3 Test Score and Grade Conditions
Reqit can define minimum scores on standardized tests:
- `Test=SAT.Math[score>=650]` → Requires a Math SAT score of at least 650
- `Test=ACT.English[score>=25]` → Requires an ACT English score of at least 25

It can also specify a required minimum grade for a course:
- `Course=CMPS.231[mg=75]` → Must have completed CMPS 231 with a minimum grade of 75

## 4. Conclusion
Reqit makes it easy to describe course and program prerequisites in a clear and structured way. With simple expressions, you can specify single course requirements, multiple options, credit-based conditions, and even standardized test score requirements. By understanding these rules, you can read and write Reqit expressions with confidence!

