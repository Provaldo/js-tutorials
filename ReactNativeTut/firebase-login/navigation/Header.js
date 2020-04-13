
import { View,TouchableOpacity,Text } from 'react-native'
import Ionicons from '@expo/vector-icons'
import styles from '../components/CustomStyle'

export default class Header extends React.Component {
    
    render(){
        return(
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>this.props.openDrawer()}>
                    <Ionicons name="ios-menu" size={32} />
                </TouchableOpacity>
                <Text>{this.props.name}</Text>
                <Text style={{width:50}}></Text>
            </View>
        )
}
}
