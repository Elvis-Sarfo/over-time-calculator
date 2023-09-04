const public_routes = {};

public_routes.admin_dashboard = "/index";

public_routes.teacher_dashboard = "/teacher-dashboard";

public_routes.users_dashboard = "/users-dashboard";

public_routes.users = "/users";

public_routes.users_grid = "/users-grid";

public_routes.users_details = "/users-details";

public_routes.add_users = "/add-users";

public_routes.edit_users = "/edit-users";

public_routes.teachers = "/teachers";

public_routes.teachers_grid = "/teachers-grid";

public_routes.teacher_details = "/teacher-details";

public_routes.add_teacher = "/add-teacher";

public_routes.edit_teacher = "/edit-teacher";

public_routes.departments = "/departments";

public_routes.add_department = "/add-department";

public_routes.edit_department = "/edit-department";

public_routes.subjects = "/subjects";

public_routes.add_subject = "/add-subject";

public_routes.edit_subject = "/edit-subject";

public_routes.claims= "/claims";

public_routes.claimsIdParam="/claims/:id";

public_routes.claim_approvals= "/claim-approvals";

public_routes.add_claim= "/add-claim";

public_routes.edit_claim= "/edit-claim/:id";

public_routes.view_claim= "/view-claim";


public_routes.settings= "/settings";

// ------------- ( Pages ) ----------------

public_routes.login = "/login";

public_routes.logout = "/logout";

public_routes.register = "/register";

public_routes.forgot_password = "/forgot-password";

public_routes.blank_page = "/blank-page";
// -------------( Lessons ) ----------------
public_routes.lesson="/lesson";
public_routes.lessonIdParam="/lesson/:id";

// ------------ ( error page ) ----------------
public_routes.pageNotFount = "/error-404";

public_routes.serverError = "/error-500";

// ----------- ( Profile ) ------------------

public_routes.compose = "/compose";

public_routes.inbox = "/inbox";

public_routes.profile = "/profile";

public_routes.spinner = "/spinner";





module.exports = public_routes;
