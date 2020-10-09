// type alias
type Uuid = number | string | undefined
type Platform = 'Windows' | 'Linux' | 'MacOs'

const logDetails = (uuid: Uuid, item: string) => {
  console.log(`uuid: ${uuid} - item: ${item}`);
}

const logInfo = (uuid: Uuid, user: string) => {
  console.log(`uuid: ${uuid} - user: ${user}`);
}

const renderPlatform = (platform: Platform) => {
  console.log(`Platform is: ${platform}`);
}


logDetails(123, 'xunda');
logDetails('123', 'xunda');

logInfo(123, 'xunda');
logInfo('123', 'xunda');

// renderPlatform('ios'); Argument of type 'ios' is not assignable to Platform
renderPlatform('Linux');