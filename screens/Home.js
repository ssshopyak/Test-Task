import React, { useEffect, Component , useState, useRef } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList, Dimensions, Item} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const hondacivic = "https://avcdn.av.by/advertpreview/0000/2752/4738.jpeg";
const bmw320i = "https://img.olx.com.br/thumbs256x256/04/044160385495984.jpg";
const volvoxc60 = "https://m.media-amazon.com/images/I/81xGWR2BM2L._CR204,0,1224,1224_UX256.jpg";
const landroverfreelander ="https://www.drivernotes.net/media/f346e2246a7100f72a2b4fa420be7055.jpg";
const silvias15 = "https://static-s.aa-cdn.net/img/ios/1202543339/6c5ded6036df532ab50e2c85a9fee3b0?v=1";
const qashqai = "https://lh3.googleusercontent.com/proxy/daSuJ0AkQ0IJCoQMWwG020Nq_l6eBIPQqqkcCwK6rISPlWAe_5P0bGMHZ2byLp504z7ejs_lhVCe18sq_qOsHKlAkvlmGGcI";
const skyline = "https://styles.redditmedia.com/t5_plkb0/styles/profileIcon_qbvfx9vxmhv51.jpg?width=256&height=256&crop=256:256,smart&s=efb99dc03d4971da552e444600e7f9b4346f52bc";
const supra = "https://i.imgur.com/9Zw6RW3.jpg";
const porshe991 = "https://avatarfiles.alphacoders.com/588/58845.jpg";
const mersgla = "https://biz.liga.net/public/images/general/2008/03/04/200803040000004108.jpg";
const bmwx5 = "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/15/17/7f/15177f98-53af-e150-097c-b297049af69e/source/256x256bb.jpg";
const bmwx3 = "https://styles.redditmedia.com/t5_t34aj/styles/communityIcon_ls1168h466w41.png";
const range = "https://cdn.riastatic.com/photosnew/auto/photo/Land-Rover_Range-Rover__260063039f.jpg";
const land = "https://www.drivernotes.net/media/99cc79dcf4bac9a25817da0cefb33625.jpg";
const volvoxc90 = "https://m.media-amazon.com/images/I/61TpNruZ+gL._CR224,0,576,576_UX256.jpg";
const volvoxc70 = "https://m.media-amazon.com/images/I/71noIIdPKsL._CR204,0,1224,1224_UX256.jpg";
const volvos60 = "https://www.drivernotes.net/media/3d3941381ecd855902b19cd732f99cf7.jpg";
const rangdisc = "https://img.olx.com.br/thumbs256x256/85/856148496838675.jpg";
const volvos90 = "https://cdn.motor1.com/images/mgl/b2y7w/s1/1x1/volvo-s90-facelift-spy-photos.webp";
const volvov40 = "https://a2goos.com/data_images/models/volvo-v40-i/volvo-v40-i-11.jpg";


function scrollToJapan() {
    this.flatListRef.scrollToIndex({animated: true, index:0});
}

function scrollToGermany() {
    this.flatListRef.scrollToIndex({animated: true, index:5});
}

function scrollToGreatBritain() {
    this.flatListRef.scrollToIndex({animated: true, index:10});
}

function scrollToSweden() {
    this.flatListRef.scrollToIndex({animated: true, index:14});
}



const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.scrollcategories}>
            <ScrollView 
            style={styles.scrollsize}
            horizontal={true} >
                <View style={styles.category}>
                <TouchableOpacity
                    onPress={scrollToJapan}
                    >
                    <Text style={styles.cattext}>Japan</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.category}>
                    <TouchableOpacity
                    onPress={scrollToGermany}
                    >
                    <Text style={styles.cattext}>Germany</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.category}>
                <TouchableOpacity
                    onPress={scrollToGreatBritain}
                    >
                    <Text style={styles.cattext}>Britain</Text>
                    </TouchableOpacity>
                </View> 
                <View style={styles.category}>
                <TouchableOpacity
                    onPress={scrollToSweden}
                    >
                    <Text style={styles.cattext}>Sweden</Text>
                    </TouchableOpacity>
                </View>
              
            </ScrollView>
            </View>
            <View style={styles.allgoods}>
                    <SafeAreaView>
                    <FlatList
                    ref={(ref) => { this.flatListRef = ref; }}
                    keyExtractor={(item, index) => item.id}
                    data={[
                        {name:'Honda Civic', image:hondacivic, listcat:'Japan', price:'10000$', index: 1},
                        {name:'Nissan Silvia S15', image:silvias15, listcat:'Japan', price:'13000$', index: 2},
                        {name:'Nissan Qashqai', image:qashqai, listcat:'Japan', price:'8000$', index: 3},
                        {name:'Nissan Skyline R34', image:skyline, listcat:'Japan', price:'25000$', index: 4},
                        {name:'Toyota Supra', image:supra, listcat:'Japan', price:'23000$', index: 5},
                        {name:'BMW 320i', image:bmw320i, listcat:'Germany', price:'15000$', index: 6},
                        {name:'Porshe 911', image:porshe991, listcat:'Germany', price:'35000$', index: 7},
                        {name:'Mercedes-Benz GLA', image:mersgla, listcat:'Germany', price:'11000$', index: 8},
                        {name:'BMW X5', image:bmwx5, listcat:'Germany', price:'15000$', index: 9},
                        {name:'BMW X3', image:bmwx3, listcat:'Germany', price:'15000$', index: 10},
                        {name:'Land Rover', image:landroverfreelander, listcat:'Britain', price:'5000$', index: 11},
                        {name:'Range Rover', image:range, listcat:'Britain', price:'55000$', index: 12},
                        {name:'Range Rover', image:rangdisc, listcat:'Britain', price:'22500$', index: 13},
                        {name:'Land Rover', image:land, listcat:'Britain', price:'9000$', index: 14},
                        {name:'Volvo XC60', image:volvoxc60, listcat:'Sweden', price:'25000$', index: 15},
                        {name:'Volvo XC90', image:volvoxc90, listcat:'Sweden', price:'27000$', index: 16},
                        {name:'Volvo XC70', image:volvoxc70, listcat:'Sweden', price:'15000$', index: 17},
                        {name:'Volvo S60', image:volvos60, listcat:'Sweden', price:'19000$', index: 18},
                        {name:'Volvo S90', image:volvos90, listcat:'Sweden', price:'24000$', index: 19},
                        {name:'Volvo V40', image:volvov40, listcat:'Sweden', price:'16000$', index: 20},
                    ]}
                    renderItem={ ({item}) => 
                    <View style={styles.goods}>
                        <Image resizeMode='contain' style={styles.image}source={{uri:item.image}}></Image>
                        <Text style={styles.text}>{item.name} {item.listcat} {item.price}</Text>
                    </View>
                    }
                    />
                    </SafeAreaView>

            </View>
        </View>
    );
};



export default HomeScreen;

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center'
},
scrollcategories: {
    marginTop: 0,
    backgroundColor: '#d4ac87',
    height: 60,
    width: width,
    alignItems: 'center'
    
},
category: {
    marginTop: 5,
    marginHorizontal: 5,
    backgroundColor: '#66503c',
    borderRadius: 10,
    height: 50,
    width: 80,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
    
    
},
allgoods: {
    backgroundColor: '#d4ac87',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
},
image: {
    width: 70,
    aspectRatio: 1,
    borderRadius:100,
    marginRight: 40,
    marginTop: 8
    
},
text: {
    fontSize: 12,
    transform: [{translateX:-15}],
    color: 'white'
    
},
goods: {
    alignItems: "center",
    flexDirection: 'row',
     justifyContent: 'space-between'
},
cattext : {
    color: 'white'
}
});