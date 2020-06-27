import React from 'react'
import { connect } from 'react-redux'
import { Handle_AddNote, Handle_DeleteNote } from '../../redux/actionCreator'
import { Text, Header,Body,Input,Item,Content,Button } from 'native-base'
import { View } from 'react-native'
import SimpleCard from '../Cards/SimpleCard'
import { ScrollView } from 'react-native-gesture-handler'


const mapStateToProps = (state) => ({
    mainState: state.notes
})
const mapDispatchToProps = (dispatch) => ({
    addNote: (obj) => dispatch(Handle_AddNote(obj)),
    delNote: (id) => dispatch(Handle_DeleteNote(id))
})

function NotesScreen(props) {
    let state = props.mainState
    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Header style={{ backgroundColor: '#1A2930' }}>
                    <Body>
                    <Text style={{textAlign:'center',fontSize:20,color:'white'}}>Notes</Text>
                    </Body>
                </Header>
                <Content padder>
                    <Item>
                        <Input placeholder='Title of note'/>
                    </Item>
                    <Item>
                        <Input placeholder='Content of note'/>
                    </Item>
                    <Button transparent bordered  style={{ marginTop: 10, backgroundColor: '#1A2930' }}
                    ><Text style={{color:'white'}}>Add Note</Text></Button>
                </Content>
                <SimpleCard />
                <SimpleCard />
                <SimpleCard />
                <SimpleCard />
            </View>
        </ScrollView>)
}
export default connect(mapStateToProps, mapDispatchToProps)(NotesScreen)
