# Degrees and Programs
Degrees are full academic degrees, granted by the institution. They are recognized outside of the institution - as Bachelor of Science Degrees, for example. They may be composed of academic program (completion), like a major. They can also have additional requirements, such as residency, overall GPA, minimum number of credits, and other institutional achievements. 

Academic programs are majors, minors, concentrations, tracks, and other collections of requirements associated with an academic plan of study. The are not degrees, rather they make up part of a degree. Degrees have additional requirements, such as residency, total credits, etc.

## Degrees vs Programs - by example
Consider a typical BS in Chemistry degree.  This is a **degree**, in that a student earns a diploma, and it is recognized outside the institution as a credential.  A typical BS degree in Chemistry requires a student to complete a few things however:

1. **General Education requirements** - at many institution, there are courses that *all* students must take.  Whether your institution calls the General Education or not, you probably have a cluster of courses that all students need to take at some point.
2. **Course requirements of the Chemistry major** - these are the set of requirements associated with earning the chemistry degree in particular.
3. Other non-course related qualifications:
    - **Minimum GPA**
    - **Minimum number of credits earned at the institution**
    - **Residency** - for example many colleges requires the last 32 credits (or some other number) to be taken at the institution, and not transferred in.

In appiversity, the **degree** is the BS in Chemistry, which is satisfied by completing *programs* and *attainments*.  In the example above, **General Education**  is a **program** - of type *general requirements cluster* - meaning it's simply a set of required courses (and perhaps attainments).  The **chemistry major requirements** also a **program** - of type *undergraduate major*.  The other qualification would be modeled as general *attainments*, which you can read more about [here](/catalog/attainments.md)

## Generalizing requirements
Every**thing** in the catalog is considered an "attainment".  It's something that, by way of completing a set of requirements, a student **attains**, or **achieves**.  A degree, completion of a program (group of courses), passing individual courses, meeting a minimum GPA, credit hours, test score - they are all things to be "attained".

Typically, **Degrees** are the *top level* attainment.  To earn a degree, you might need to complete a set of *programs*, *courses*, and *attainments*.  To complete a program, you might have to complete *other* programs (perhaps in a major, you have a cluster for core courses, and a cluster of "electives").  The model is general, and very flexible.

## Types of Degrees
We support the following types of degrees, however it's easy for us to help you add more.  Ultimately, they are just labels - so if you have degrees that aren't listed, your degree types can be added very quickly:

1. Associates Degree
2. Bachelor of Science Degree
3. Bachelor of Arts Degree
4. Masters Degrees
5. Doctoral Degree

These are simply categories - which help in reporting and searching.   You are in complete control of the *requirements*.  A BS in Chemistry can have different credit requirements than a BS in Mathematics - it's completely up to you.  Likewise, both an MS in Social Work and an MBA would typically be listed in Masters, but certainly have very different sets of requirements.

## Types of Programs
Programs have many more types, but the same can be said about programs as degrees - they are simply categories.  We are happy to add more for your account, but we'll talk you through the pros/cons of adding more - because you might find it better for reporting and searching to keep the number down a bit.

There are 5 main groups of programs:

1. **Generic Requirement Cluster** - this is a named group of courses.  Using [Reqit](/reqit/) you can specify lists of requirements, elective sets, etc - but the idea is that it is a named set of requirements.   These sets of requirements can be referenced in [Reqit](/reqit/) by name, which is useful when the cluster is going to be reused (ie General Education would be referenced in every undergraduate degree - but you'd only model the requirements once!).  Clusters are also helpful for students when they are viewing their requirements and degree audits, as they provide convenient grouping of their requirements - making it easier to understand.

2. Major and Field of Study - these are named programs with requirements - typically associated with the name of the parent degree.  For example, if you create a BS **degree** named "Chemistry", it would likely require a *major* program requirement of "Chemistry" - among other things.  Since we typically don't think of an MS or PhD student as "majoring" in something, the label "Field of Study" is used - but it's the same concept.  An MS in Social Work would likely list as one of it's requirements a Field of Study program named "Social Work", which enumerates the requirements.  Note, you *can* bypass the indirection of degree -> program -> course list if you want, and it's not uncommon to do so with graduate degrees.  When you bypass programs, you simply list course requirement listings in the degree entity itself.

3. Minor, Certificate, Concentration, Track - these are named programs with requirement that may appear as sub-requirements of degrees or programs, or you might use them as standalone programs.  It's useful to use these designations when they fit, instead of using generic clusters, because in some places within the catalog you will be able to specifically refer to these specific types of course groups - and using the right category makes life easier.

## Courses and Attainments
Degrees typically do not list specific courses in their requirements, but often list non-course attainments.  Degrees can very frequently list multiple programs.  For example:  if your institution *requires* a minor to earn a BS degree, a BS in Chemistry would require the major requirements, and then also one minor (an [Reqit](/reqit/) makes it easy to specify this).

Academic programs usually list multiple programs as their *sub*requirements.  A good example of this would be a "Biochemistry" major, which might create a cluster of chemistry courses, a cluster of biology courses, and a cluster of courses specific to biochemistry.  Modeling all three as program clusters makes it easier to manage the overall requirements - in each of the clusters you might list the courses used to satisfy the requirement.

Attainments, in general, are sort of a catch all.  Many of them can be tracked automatically, but some need to be marked as completed/incomplete manually.  They are best used for data that can't be necessarily tied to a course - like a placement test, submission of a form, or global parameters like overall GPA.