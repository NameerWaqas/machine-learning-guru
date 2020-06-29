import React from 'react'
import { connect } from 'react-redux'
import { Handle_AddNote, Handle_DeleteNote } from '../../redux/actionCreator'
import { Text, Header, Body, Input, Item, Content, Button } from 'native-base'
import { View } from 'react-native'
import SimpleCard from '../Cards/SimpleCard'
import { ScrollView } from 'react-native-gesture-handler'


const mapStateToProps = (state) => ({
    mainState: state.mainState
})
const mapDispatchToProps = (dispatch) => ({
    addNote: (obj) => dispatch(Handle_AddNote(obj)),
    delNote: (id) => dispatch(Handle_DeleteNote(id))
})

function NotesScreen(props) {
    let state = props.mainState
    let title = ''
    let note = ''
    let handleTitle=(t)=>{
        title = t
    }
    let handleNote = (n)=>{
        note = n
    }
    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Header style={{ backgroundColor: '#1A2930' }}>
                    <Body>
                        <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>Notes</Text>
                    </Body>
                </Header>
                <Content padder>
                    <Item>
                        <Input placeholder='Title of note' onChangeText={(t)=>handleTitle(t)}/>
                    </Item>
                    <Item>
                        <Input placeholder='Content of note'  onChangeText={(t)=>handleNote(t)}/>
                    </Item>
                    <Button onPress = {()=>props.addNote({title:title,note:note})}
                        transparent bordered style={{ marginTop: 10, backgroundColor: '#1A2930' }}>
                        <Text style={{ color: 'white' }}>Add Note</Text></Button>
                </Content>
                <Content>
                    {props.mainState.root.notes.map((obj, id) => {
                        return <SimpleCard title={obj.title} note={obj.note} del={() => props.delNote(id)} />
                    })}
                </Content>
                {/* <SimpleCard />
                <SimpleCard />
                <SimpleCard />
                <SimpleCard /> */}
            </View>
        </ScrollView>)
}
export default connect(mapStateToProps, mapDispatchToProps)(NotesScreen)
