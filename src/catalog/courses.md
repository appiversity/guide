# Courses
Courses are the core of Catalog, they are common requirements of programs and degrees.  Each course has the following proeprties, all editable and importable by anyone with catalog access to your account:

- Subject - the PSYC in PSYC 101 - Introduction to Psychology
- Number - the 101 in PSYC 101 - Introduction to Psychology
- Title - the "Introduction to Psychology" in PSYC 101 - Introduction to Psychology
- Description - a course description, meant for anyone to view.  This should be a few sentences, it's not the entire syllabus!
- Min, Max, default Credits
- Default Capacity
- External ID

Note that a *course* is **not** the same thing as a section being offered in a given term.  A course is the PSYC 101 - Introduction to Psychology.  It doesn't have a section number, a classroom, a time, an instructor, or anything specific to when a student registers - it is simply a catalog entry.

Typically Min/Max/Default credits will be the same, but you can specify them individually for courses that are offered in different credit variations.  When you schedule actual sections of the course, you will choose among the range of values.  The same premise holds for "Default Capacity" - specifying 25 students means the course *typically* has a cap of 25 students - but that won't stop you from specifying more or less when scheduling a section.

## Prerequisites and Corequisites
All courses have a two *registration* attainments associated with them - prerequisites and corequisites.  Prerequisites must be complete before a student can register for the course, while corequisites require a student to have already completed the requirement, or be int he process of completing it in the same term.  When you create a course, these requirements are left blank - indicating that the course can be taken without any other requirements being completed.

Course requirements can be edited, and they can also be imported using the course import module.  In both cases, you create requirements using [Reqit](/reqit/). 

## Course Attributes
Course attributes are additional information items that can be attached to courses.  Attributes are defined globally, and depending on their *type* may have additional parameters associated with them when applied to specific courses.  Attributes have *codes* that are short identifiers, names that appear in most places in the app, along with a more detailed description which is available as contextual information.

### Attribute types
Attributes can be defined as one of **four** different types:

- **True/False** (boolean) - the presence of the attribute associated with he course indicates "true".  For example, a "Lab" attribute, used to tell a student that the course is a lab, would be a good candidate for type *boolean*.  You'd simply associate it with any course that is a laboratory course.=
- **Numeric** - This is a numeric value that is associated with a course.  An example would be "Lab Fee", representing an additional fee a student will be charged when registering.  Many courses will have this attribute, and course might have different *values* specified.
- **Price** - This is the same thing as numeric - when associated with a course, you will need to specify a numeric value.  The only difference, it is rendered as dollars/cents on the screen.  A lab fee attribute is actually **best** modeled this way, because it read as $75.00 instead of just "75".
- **Text** - text attributes have a name, but when associated with a course you will supply course-specific text along with it.  Continuing with the lab course example, you might have an attribute named "Lab equipment", and when associated with a lab course, you list what kinds of equipment the student might be required to buy.  