import { Grid } from 'antd-mobile'

function Moves({ data }) {
  return (
    <Grid data={data} columnNum={4} hasLine={false} />
  )
}

export default Moves