// import {createKindeManagementAPIClient} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Dashboard() {
  // const apiClient = await createKindeManagementAPIClient();
  // const roles = await apiClient.rolesApi.getRoles();
  // const users = await apiClient.usersApi.getUsers();

  return (
    <div className="container">
      <div className="card start-hero">
        <p className="text-body-2 start-hero-intro">Woohoo!</p>
        <p className="text-display-2">
          Your authentication is all sorted.
          <br />
          Build the important stuff.
        </p>
      </div>
      <section className="next-steps-section">
        <h2 className="text-heading-1">Next steps for you</h2>
      </section>

      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
    </div>
  );
}
