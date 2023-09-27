import './styles/pdfGenerator.css';
import person from './data.jsx'
import { Document, Image, Line, Page, PDFViewer, Text, Svg, Path, View, StyleSheet } from '@react-pdf/renderer';


const PDFGenerator = () => {

  const singleHighlight = (data) => {
    const List = () => {
      return (data.list.map((item)=>{
        return (
          <Text key={item}>{item}</Text>
        )
    }))}
    return (
      <View style={styles.highlight}>
        <Text style={styles.highlightName}>
          {data.name.toUpperCase()}
        </Text>
        <Svg height="10" width="150">
            <Line x1="0" y1="5" x2="280" y2="5" strokeWidth={2} stroke="yellow" />
        </Svg>
        <List/>
      </View>
    )
  }

  const Highlights = ({data}) => {
    const allHighlights = data.map((highlight)=>{
      return singleHighlight(highlight)
    })
    return allHighlights
  }
  const getSection = (section) => {
    const keys = Object.keys(section)
    return ( 
      <View>
        <Text>{section[keys[1]]}</Text>
        <Text>{section[keys[2]]}</Text>
        <Text>{section[keys[0]]}</Text>
        <Text>{section[keys[3]]}</Text>
        <Svg height="10" width="150">
            <Line x1="0" y1="5" x2="280" y2="5" strokeWidth={2} stroke="yellow" />
        </Svg>
      </View> 
    )
}


  const typeTimeline = (data) => {
    const Type = () => {
      return (data.list.map((item)=>{
        return getSection(item)
      }))
    }
    return (
      <View key={data.name}>
        <Text>{data.name}</Text>
        <Svg height="10" width="150">
            <Line x1="0" y1="5" x2="280" y2="5" strokeWidth={2} stroke="yellow" />
        </Svg>
        <Type/>

      </View>
    )
  }

  const Timelines = ({data}) => {
    const allTimelines = data.map((timeline)=>{
      return typeTimeline(timeline)
    })
    return allTimelines
  }


  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      width: '21cm',
      height: '29.7cm',
      fontSize: '4mm'
    },
    highlight:{
      marginLeft:'0.55cm',
      marginTop:'5mm',
    }
    ,
    iconInfo:{
      flexDirection:'row',
      marginBottom:'2mm'
    },
    icon:{
      width:'5mm', 
      height:'5mm', 
      backgroundColor:'yellow',
      marginLeft:'0.55cm',
    },
    image: {
      width: '5cm',
      padding: '0.2cm',
      backgroundColor:'white',
      marginTop:'1cm',
      marginLeft:'0.55cm',
      marginBottom:'1cm'
    },
    infoText:{
      marginLeft:'0.3cm',
    },
    leftContainerDisplay: {
      backgroundColor: '#242424',
      padding: '3px',
      flexDirection: 'column',
      width: '6.5cm',
      color:'white'
    },
    nameContainer:{
      backgroundColor:'yellow',
      textAlign:'center',
      marginTop:'1.5cm',
      marginLeft:'0',
      height:'3.5cm',
      justifyContent:'center',
      gap:'10mm'
    },
    rightContainerDisplay: {
      backgroundColor: 'white',
      color: '#242424',
      width:'14.5cm',
      marginRight:'0.55cm',
    }
    
  });
  
  // Create Document Component
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page} wrap={true}>
        <View style={styles.leftContainerDisplay}>
          <Image src={person.info.image} style={styles.image} />
          {person.info.phone && <View style={styles.iconInfo}>
            <Svg style={styles.icon} viewBox='-100 -100 700 700' >
              <Path
              fill='#000'
              d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z'
              ></Path>
            </Svg>
            <Text style={styles.infoText}>{person.info.phone}</Text>
          </View>}
          {person.info.email && <View style={styles.iconInfo}>
            <Svg style={styles.icon} viewBox='-100 -100 700 700' >
              <Path
              fill='#000'
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              ></Path>
            </Svg>
            <Text style={styles.infoText}>{person.info.email}</Text>
          </View>}
          {person.info.web && <View style={styles.iconInfo}>
            <Svg style={styles.icon} viewBox='-100 -100 700 700' >
              <Path
              fill='#000'
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              ></Path>
            </Svg>
            <Text style={styles.infoText}>{person.info.web}</Text>
          </View>}
          {person.info.address && <View style={styles.iconInfo}>
            <Svg style={styles.icon} viewBox='-150 -100 700 700' >
              <Path
              fill='#000'
              d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              ></Path>
            </Svg>
            <Text style={styles.infoText}>{person.info.address}</Text>
          </View>}
          <Highlights data={person.highlights}/>
        </View>
        <View style={styles.rightContainerDisplay}>
          <View style={styles.nameContainer}>
            <Text>{person.info.name.toLocaleUpperCase()}</Text>
            <Text>{person.info.profession}</Text>
          </View>
          <Text>{person.info.description}</Text>
          <Svg height="10" width="150">
            <Line x1="0" y1="5" x2="280" y2="5" strokeWidth={2} stroke="yellow" />
          </Svg>
          <Timelines data={person.timelines}/>
        </View>
      </Page>
    </Document>
  );
  return (
    <>
        <PDFViewer title='myCV.pdf' className='PDFViewer'>
          <MyDocument />
        </PDFViewer>
    </>
  );
};


export default PDFGenerator;
