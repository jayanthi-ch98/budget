import React from 'react'
import { Statistic } from 'semantic-ui-react'

function DisplayBalance(props) {
  const {size,Label,Value,color}=props;
  return (
   <Statistic size={size} color={color}>
        <Statistic.Label style={{ textAlign: "left" }}>{Label}</Statistic.Label>
        <Statistic.Value>{Value}</Statistic.Value>
      </Statistic>
  )
}

export default DisplayBalance
