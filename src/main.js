import React,{Component} from 'react'

import {View,Button,Text,ScrollView,SafeAreaView,StyleSheet,Alert,Image,Modal} from 'react-native'
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

import * as firebase from 'firebase'




const firebaseConfig = {
    apiKey: "AIzaSyDjeaDVbAG06KvIaw_BMvASeFNYiiQy_fE",
    authDomain: "ecs-sam.firebaseapp.com",
    databaseURL: "https://ecs-sam.firebaseio.com",
    projectId: "ecs-sam",
    storageBucket: "ecs-sam.appspot.com",
    messagingSenderId: "166777920950",
    appId: "1:166777920950:web:179a160d4a10233fdf3517",
    measurementId: "G-GMM86Y75YL"
};

firebase.initializeApp(firebaseConfig);


export default class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            image: null,
            res: '',
            file: '',
            pic: null,
            name: null,
            // uri: '',
            source: { uri: '' },
            su: null,
            modalVisible: false,
            link: null,
            link2: '',
            pdf: '',
            newLink: 'url affan firebase',
            onvisible : false,
        }
    }


    onClick=async ()=>{
        console.log('click')
        await DocumentPicker.show({
            filetype: [DocumentPickerUtil.allFiles()],
        }, (error, res) => {

            console.log(res)

            console.log(
                res.uri,
                res.type, // mime type
                res.fileName,
                res.fileSize,
                'd', res.data
            );
            // alert(res.uri);
            this.setState({link : res.uri})
            console.log(this.state.link)
            this.setState({ source: { uri: res.uri }, res: res.uri, name: res.fileName })
            this.setState({ su: this.state.res.replace("content://", "file://") })
            console.log(this.state.su)
            // return this.uriToBlob(this.state.su);
            // console.log( 'aaa',this.uriToBlob(this.state.su))


        })




    }

    onShpw=async ()=>{
        const ref = firebase.storage().refFromURL('gs://ecs-sam.appspot.com/SampleVideo_1280x720_1mb.mp4');
        console.log(ref);

        ref.getDownloadURL().then(data => {
            this.setState({ newLink: data })
            console.log(data)
        }).catch(error => {
            console.log(error)
        })


        this.setState({onvisible : true});
    }

    componentDidMount(): void {
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    }

    componentWillUnmount(): void {
    }

    render(){
        return(
            <View style={{flex : 1}}
            >
                <Button title={'Click'} onPress={()=>this.props.navigation.navigate('Video')}/>





            </View>
        )
    }

}

