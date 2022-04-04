import React, { useState, useEffect } from 'react'
import { connectController as wrapGlobalGameData } from '../../../gameItems'
import { Button, CodeContainer, WindowModal } from '../../../gameItems/components'

const ContractWindow = ({ isOpen }) => {
  const contentFileName = 'DEX.sol'
  const [fileContent, setFileContent] = useState('')

  useEffect(() => {
    import(`./${contentFileName}`)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setFileContent(res))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
  })

  return (
    <WindowModal
      initTop={window.innerHeight * 0.02}
      initLeft={window.innerWidth / 2 + window.innerWidth * 0.02 + window.innerWidth * 0.05}
      initHeight={window.innerHeight * 0.8}
      initWidth={window.innerWidth * 0.4}
      backgroundPath='./assets/items/window_large.png'
      dragAreaHeightPercent={8}
      windowTitle={contentFileName}
      isOpen={isOpen}
      windowTiteleStyle={{ top: '3.5%', left: '56%' }}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <div
        className='content'
        style={{
          float: 'left',
          width: '100%',
          height: '100%',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
      >
        <CodeContainer language='solidity'>
          {fileContent}
        </CodeContainer>
      </div>
    </WindowModal>
  )
}

export default wrapGlobalGameData(ContractWindow)
