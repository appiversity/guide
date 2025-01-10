// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="guide.html"><strong aria-hidden="true">1.</strong> User Guide</a></li><li class="chapter-item expanded "><a href="institution/index.html"><strong aria-hidden="true">2.</strong> Creating an institution</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="institution/signup.html"><strong aria-hidden="true">2.1.</strong> Signing up</a></li><li class="chapter-item expanded "><a href="institution/verification.html"><strong aria-hidden="true">2.2.</strong> Verifiction</a></li><li class="chapter-item expanded "><a href="institution/unverified.html"><strong aria-hidden="true">2.3.</strong> Unverified Accounts</a></li></ol></li><li class="chapter-item expanded "><a href="academic-years/index.html"><strong aria-hidden="true">3.</strong> Managing Academic Years</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="academic-years/active-ay.html"><strong aria-hidden="true">3.1.</strong> The Active Academic Year</a></li><li class="chapter-item expanded "><a href="academic-years/rollover.html"><strong aria-hidden="true">3.2.</strong> Rollover</a></li><li class="chapter-item expanded "><a href="academic-years/stems.html"><strong aria-hidden="true">3.3.</strong> Stems</a></li></ol></li><li class="chapter-item expanded "><a href="users/index.html"><strong aria-hidden="true">4.</strong> Users</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="users/accounts.html"><strong aria-hidden="true">4.1.</strong> User Accounts</a></li><li class="chapter-item expanded "><a href="users/privileges.html"><strong aria-hidden="true">4.2.</strong> Privileges</a></li></ol></li><li class="chapter-item expanded "><a href="signin/index.html"><strong aria-hidden="true">5.</strong> Sign in and Credentials</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="signin/password.html"><strong aria-hidden="true">5.1.</strong> Logging in with a password</a></li><li class="chapter-item expanded "><a href="signin/otl.html"><strong aria-hidden="true">5.2.</strong> Logging in with a OTL / Token</a></li><li class="chapter-item expanded "><a href="signin/public.html"><strong aria-hidden="true">5.3.</strong> Public account sign in</a></li><li class="chapter-item expanded "><a href="signin/reset.html"><strong aria-hidden="true">5.4.</strong> Resetting your password</a></li></ol></li><li class="chapter-item expanded "><a href="departments/index.html"><strong aria-hidden="true">6.</strong> People &amp; Departments</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="departments/people-public-people-users.html"><strong aria-hidden="true">6.1.</strong> Differences between People, Public People, and Users</a></li></ol></li><li class="chapter-item expanded "><a href="workflow/index.html"><strong aria-hidden="true">7.</strong> Workflow</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="workflow/create-workflow.html"><strong aria-hidden="true">7.1.</strong> Creating Workflows</a></li><li class="chapter-item expanded "><a href="workflow/publishing-workflows.html"><strong aria-hidden="true">7.2.</strong> Publishing Workflows</a></li><li class="chapter-item expanded "><a href="workflow/public-workflows.html"><strong aria-hidden="true">7.3.</strong> Public Workflows</a></li><li class="chapter-item expanded "><a href="workflow/starting-workflow.html"><strong aria-hidden="true">7.4.</strong> Starting Workflows</a></li><li class="chapter-item expanded "><a href="workflow/workflow-notifications.html"><strong aria-hidden="true">7.5.</strong> Workflow Notifications</a></li><li class="chapter-item expanded "><a href="workflow/workflow-queue.html"><strong aria-hidden="true">7.6.</strong> Workflow Queue</a></li><li class="chapter-item expanded "><a href="workflow/approving-workflow.html"><strong aria-hidden="true">7.7.</strong> Workflow Approval</a></li><li class="chapter-item expanded "><a href="workflow/workflow-archive.html"><strong aria-hidden="true">7.8.</strong> Workflow Archives</a></li></ol></li><li class="chapter-item expanded "><a href="catalog/index.html"><strong aria-hidden="true">8.</strong> Catalog</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="catalog/degrees-programs.html"><strong aria-hidden="true">8.1.</strong> Degrees and Programs</a></li><li class="chapter-item expanded "><a href="catalog/courses.html"><strong aria-hidden="true">8.2.</strong> Courses</a></li><li class="chapter-item expanded "><a href="catalog/attainments.html"><strong aria-hidden="true">8.3.</strong> Attainments</a></li><li class="chapter-item expanded "><a href="catalog/reqit.html"><strong aria-hidden="true">8.4.</strong> Requirements with Reqit</a></li><li class="chapter-item expanded "><a href="catalog/course-attributes.html"><strong aria-hidden="true">8.5.</strong> Course Attributes</a></li></ol></li><li class="chapter-item expanded "><a href="reqit/index.html"><strong aria-hidden="true">9.</strong> Reqit</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
