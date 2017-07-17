import merge from 'lodash.merge';

const initialState = (connectedJPlayers, defaultValues, optionsName) => {
  const jPlayers = {};
  let newConnectedJPlayers = connectedJPlayers;

  if (!Array.isArray(connectedJPlayers)) {
    newConnectedJPlayers = [newConnectedJPlayers];
  }

  newConnectedJPlayers.forEach((connectedJPlayer) => {
    jPlayers[connectedJPlayer.options.id] = merge({}, {
      ...defaultValues,
    }, connectedJPlayer[optionsName]);
  });

  return jPlayers;
};

export default initialState;
