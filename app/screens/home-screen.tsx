import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../components"
// import { useStores } from "../models/root-store"
import { color } from "../theme"
import { NavigationScreenProps } from "react-navigation"

export interface HomeScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = observer((props) => {
  // const { someStore } = useStores()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" tx="homeScreen.header" />
    </Screen>
  )
})
