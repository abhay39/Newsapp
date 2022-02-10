import { StyleSheet, Text, View,Image, ScrollView, Linking } from 'react-native';
import React,{Component} from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import Header from '../../components/AppBar';
import axios from 'axios';

export default class HomeScreen extends Component {
   state={
       articles:[],
       isLoading:true,
        error:null
   };
   getArticles(){
        axios.get(
            'https://saurav.tech/NewsAPI/everything/cnn.json'

            
        ).then(response =>response.data.articles.map(article=>({
            date : `${article.publishedAt}`,
            title : `${article.title}`,
            description : `${article.description}`,
            url : `${article.url}`,
            urlToImage : `${article.urlToImage}`,
        }))
        ).then(articles=>this.setState({articles,isLoading:false})).catch(error=>this.setState({error,isLoading:false}));
   }
    componentDidMount(){
        this.getArticles();
    }
    render(){
        const {isLoading,articles}=this.state;
        return(
            <View>
                <Header/>
                <ScrollView>
                    {!isLoading ? (
                        articles.map(article =>{
                            const {date, title, description, url, urlToImage}=article;
                            return(
                                <Card key={url} style={{marginTop:10, borderColor:'black', borderRadius:5, borderBottomWidth:1}}
                                onPress={()=>Linking.openURL(url)}>
                                    <View style={{flexDirection:'row'}}>
                                        <View style={{justifyContent:'space-around', flex:2/3, margin:10}}>
                                            <Title>{title}</Title>
                                        </View>
                                        <View style={{flex:1/3, margin:10}}>
                                            <Image source={{uri:urlToImage}} style={{width:120, height:120}}/>
                                        </View>
                                    </View>
                                    <View style={{margin:10}}>
                                        <Paragraph>{description}</Paragraph>
                                        <Text>Published At:{date} </Text>
                                    </View>
                                </Card>
                            );
                        })
                    ):(
                        <Text style={{justifyContent:'center', alignItems:'center'}}>Loading....</Text>
                    )}
                </ScrollView>
            </View>
        )
    }
}
