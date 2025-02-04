# Users
There are several types of "users" in your institution.  

- **Outside (public) people** - People who might view your catalog, department listings, even access some of your workflows - *but are not part of your institution*.  We call these "Public People", and you can learn more about how they [login](../signin/public.md) and interact with [published materials](../publishing/index.md) and [access workflows](../workflow/public-workflows.md).  
- **Students** - Students have an obvious connection to your institution!  Students generally can't edit much of your data though, they can interact with internal workflows, and access registration and records - and of course can browse department listings and your catalog.  Student users are just "Public People" if you haven't added Registration or Student Services to your account.  Once you do add those, you'll have access to Student listings.
- **Faculty and Staff** - Faculty and staff are the "People" in Department's people listings.  They have profiles, they have positions within your institution.  They can be referenced in workflows, and are listed in scheduling.  They are limited users, in that they cannot edit a lot - but depending on their role they have more access than public people and students.

All three of the user types above are *limited* users.  In this section, we focus on **full users** - which we call "Knowledge Engineers".  These are the users that **create** the data - they build the catalog, they configure scheduling parameters (timeblocks, classroom lists), and create the department structures that describe your institution.  These are the **power users**.

## Knowledge Engineers (KE) Users
KE Users, usually labeled as "Users" in the app, have assigned sets of privileges.  These include the ability to edit department data, catalog data, scheduling, registration, and even account settings and user listings themselves.

It's important to understand that a KE User is probably also a "Person" in your Department listings.  A quick example:

- The Registrar is someone working at your institution.  They will be listed under "People" in [Departments](../departments/people.md).  They will likely be the recipient of many workflows.  
- The Registrar is very likely **also** one of the people you want to have full edit access to the institution's Course Catalog.  In this case, the Registrar is also a **KE User**, and would have a User account.

There may be people who are **only** KE Users.  Some institutions use Departments to list every department/division on campus, and so every employee has a "People" account. Other institutions stick to just the academic units, and some other key administrative positions.  In the latter, you might have several administrative assistants who are responsible for maintaining the data on appiversity - they would be **KE Users**, but they might not be listed anywhere in Departments.

Of course, most faculty and staff are **not** going to be KE Users.  Most faculty and staff access department listings and the course catalog, for example - but you do not allow them to make changes to that data.

Here's a simple scenarios that might help you think about who are *Users* and who aren't:

### Example 1 - Course Modification Forms
- Faculty can submit a form to request a course description change.  The form is a [Workflow](../workflow/index.md).  The faculty member is a [Person](../departments/people.md) listed in Departments.  
- Someone at your institution **created the form** to be used, and posted it on the internal university website for faculty to download and fill out.  **That person is a KE User** - they create the workflow itself.

### Example 2 - Catalog / Schedule Listing
- Faculty are listed as the instructors of a section in the scheduler.  The Faculty member is a [Person](../departments/people.md) account - their information is listed in Departments.  Public people (and students) can look up profile information about that faculty member, and see what other courses they are teaching.
- Someone at your institution performed the data entry to associate the faculty member with a section.  **That person is a KE User** - they manipulate section data in the scheduling system.

### Example 3 - Curriculum Committee
- Your curriculum committee is comprised of mostly faculty members.  You've modeled your curriculum committee as a [Department](../departments/) so you can publish listings of membership and roles.  Each member is a [Person](../departments/people.md) in Departments, including the **chair** of the committee.
- The Chair of the committee is listed as the *recipient* for various Workflows used to request catalog changes to courses and programs.  When the chair receives them, the curriculum committee deliberates and may approve the change. This is all possible with a [Person](../departments/people.md) account.
- When it comes to making the actual change to catalog data - if your institution wants the Chair to do that data entry - that's perfectly fine!  However, then that faculty member must **also** have a **KE User** account, so they can edit catalog data.

Now let's look at how KE Users are created and managed