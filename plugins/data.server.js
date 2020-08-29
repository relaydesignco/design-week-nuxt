const wait = (amount = 0) => new Promise((resolve) => setTimeout(resolve, amount));

export default async ({ store }) => {
  await store.dispatch('getEvents');
  await wait(1000);
  await store.dispatch('getSpeakers');
  await wait(1000);
  await store.dispatch('getSponsors');
  await wait(1000);
  await store.dispatch('getOptions');
  await wait(1000);
  await store.dispatch('getPages');
};
