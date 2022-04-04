import React, { useState, useEffect } from 'react'
import { Terminal } from '../../gameItems/components'
import { connectController as wrapGlobalGameData } from '../../gameItems'

import { DetailsOnWalletsWindow, CreateWalletWindow } from './components'
import levelDialog from './dialog'

export const LEVEL_ID = 'CreateWallet'

const CreateWalletLevel = ({ dialog, globalGameActions }) => {
  useEffect(() => {
    // load level
    globalGameActions.level.setCurrentLevel({ levelId: LEVEL_ID })
    // set initial level background
    globalGameActions.background.setCurrentBackground({ background: 'City' })
    // set dialog
    globalGameActions.dialog.initDialog({
      initialDialogPathId: `${LEVEL_ID}/Start`,
      currentDialog: levelDialog
    })
    // show terminal
    globalGameActions.terminal.showTerminal()
  }, [])

  // const [createWalletWindowVisible, setCreateWalletWindowVisibility] = useState(false)
  const [detailsOnWalletsWindowVisible, setDetailsOnWalletsWindowVisibility] = useState(false)

  return (
    <div id='createWalletLevel'>
      <Terminal
        globalGameActions={globalGameActions}
        setDetailsOnWalletsWindowVisibility={setDetailsOnWalletsWindowVisibility}
      />

      <DetailsOnWalletsWindow
        isOpen={detailsOnWalletsWindowVisible}
        globalGameActions={globalGameActions}
      />
      {/* <CreateWalletWindow isOpen={createWalletWindowVisible} /> */}
    </div>
  )
}

export default wrapGlobalGameData(CreateWalletLevel)
