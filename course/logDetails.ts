// type alias
type Uuid = number | string | undefined
type Platform = 'Windows' | 'Linux' | 'MacOs'

type Log = {
  uuid: Uuid
  item: string
}

const logDetails = ({ uuid, item }: Log) => {
  console.log(`uuid: ${uuid} - item: ${item}`);
}

const logInfo = (uuid: Uuid, user: string) => {
  console.log(`uuid: ${uuid} - user: ${user}`);
}

const renderPlatform = (platform: Platform) => {
  console.log(`Platform is: ${platform}`);
}


logDetails({ uuid: 123, item: 'xunda'});
logDetails({ uuid: '123', item: 'xunda'});

logInfo(123, 'xunda');
logInfo('123', 'xunda');

// renderPlatform('ios'); Argument of type 'ios' is not assignable to Platform
renderPlatform('Linux');
renderPlatform('MacOs');