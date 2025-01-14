# Workflow Notifications
Throughout the lifecycle of a workflow, the appropriate people will receive notifications via their email address when the workflow passes through various stages.

<img src='../images/flow-lifecycle.png'/>

## On Submit
Whenever a workflow is submitted (started), either fresh or because a revision was requested of the submitter, two email notifications are sent:
1. To the **Submitter**:  This email confirms to the submitter that the workflow has been received.  The email contains the *permalink* for the workflow, which can be used at anytime to view the full status of the workflow.  It also includes information about who is currently reviewing the workflow.  
2. To the **Approver**:  This email is sent to the recipient selected by the submitter.  The email contains information regarding who submitted the form, and some basic header information.  The email explains that the recipient is the next person expected to take action on the workflow.  The permalink is also included in the email, which can be clicked to go directly to the workflow.

## On Approval
When someone **approves** a workflow, the notifications depend on the *next step*.  
### Workflow is Complete
If there are no additional steps, then the **submitter** receives an email notifying them that their workflow has been approved and completed.  The email again contains the permalink for quick access to the details (if any) added to the workflow.
### Additional approvals
If there are additional steps in the approval chain, then on approval the reviewer must have selected a recipient for the **next** step.  An email is sent to this recipient.  The email contains information regarding who submitted the form, and some basic header information.  The email explains that the recipient is the next person expected to take action on the workflow.  The permalink is also included in the email, which can be clicked to go directly to the workflow.

**Note** the submitter is not notified when the workflow is being passed from one approval step to another.  The submitter may, at any time, access the workflow via the permalink provided in the original submission notification however.  This allows them to check the status of the workflow and see completed approvals, intermediate notes (if any), and the current status.

## On Request for Revision
Requests for revision follow the similar notification rules as approvals.  When a request for revision is made **and the reviewer is the first reviewer**, then the workflow is being returned to **the submitter**.  In this case, the **submitter** will receive a notification email.

If the reviewer is requesting a revision, but there were prior approvals in the chain, then the workflow is being returned to the reviewer proceeding this step - and a notification email is sent to that reviewer.  That reviewer can request revision again, sending it back one more step - and so on.

For example, if a student submits a course drop request to an instructor, who approves the request and sends it to the dean, the dean may request a revision asking for more information.  This request for revision goes back to the instructor.  If the instructor is able to provide that information, it can be added and re-approved, sending it back to the dean.  If the instructor is unable to provide the information, they can request revision once more, and the workflow is returned to the student.

## On Rejection
When a workflow is rejected, it's lifecycle has terminated.  Only the **submitter** is notified.  The email contains the reason for rejection as entered by the reviewer, and the permalink for additional details.

## On Hand-Off
Whenever someone *hands off* a workflow, the new recipient is notified via email, with all of the same information they would  have received if they were the original recipient.  The submitter, and other approvers associated with the workflow are *not* notified.

<span style="display: none">GUIDE WATCH OUT:  Roadmap has automatic handoff, along with email silencing to support people who receive many workflows.  Will need to update guide to reflect this.</span>