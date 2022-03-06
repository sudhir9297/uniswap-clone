import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "754n61pm",
  dataset: "production",
  apiVersion: "v1",
  token:
    "skWF609vyLPPRfMA7OnDzKj9wiPFAV4SaRXG3oOIzFZcaWj6F3dXcXPp4FWwgVsdwEYYS456yRVtrVrBDFGmGEg0n5nu6QnhWb1miPITBUsPMIFjSczBJc0twfYdtOKXjbNf2KBqoVS41bCePF4p5jfu4vlvsFciu5CRPkbrSIiyHFaMSfB3",
  useCdn: false,
});
