import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);
  const resultArray = [];
  const results = await Promise.allSettled([signUpUserPromise, uploadPhotoPromise]);
  for (const result of results) {
    const { status } = result;
    // console.log(result)
    const value = status === 'fulfilled' ? result.value : result.reason.toString();
    // Push the result object to the resultArray
    resultArray.push({ status, value });
  }
  // console.log(resultArray)
  return resultArray;
}
