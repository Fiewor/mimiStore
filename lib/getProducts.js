import * as Realm from "realm-web";
import superjson from "superjson";

export async function getProducts() {
  const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
  const app = new Realm.App({ id: REALM_APP_ID });
  const credentials = Realm.Credentials.anonymous();

  try {
    const user = await app.logIn(credentials);
    const allProducts = await user.functions.getAllProducts();
    return superjson.stringify(allProducts);
  } catch (err) {
    console.error("Failed to log in", err);
  }
}
