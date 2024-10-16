import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

const Template4 = ({ resumeData,template }) => (
    
  <Document>
   {console.log(resumeData)}
    <Page style={styles.body}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.row}>
            <div>
        <Text style={styles.name}>{`${resumeData.personalInfo.firstname} ${resumeData.personalInfo.surename}` || 'FirstName'}</Text>
        <Text style={styles.subText}>{resumeData.personalInfo.profession || ""}</Text>
        </div>
        <div>
        <Text style={styles.contact}>{resumeData.personalInfo.email || ""}</Text>
        <Text style={styles.contact}>{resumeData.personalInfo.phonenumber || ""}</Text>
        </div>
        </View>
        <div style={styles.row}>
        <div>
        <Link style={styles.link} src={resumeData.personalInfo.linkedin || ''}>{`${resumeData.personalInfo.linkedin?'LinkedIn':''}`}</Link>
        <Link style={styles.link} src={resumeData.personalInfo.github || ''}>{`${resumeData.personalInfo.github?'GitHub':''}`}</Link>
        <Link style={styles.link} src={resumeData.personalInfo.portfolio || ''}>{`${resumeData.personalInfo.portfolio?'Portfolio':''}`}</Link>
        </div>
        
        </div>
      </View>

      {/* Section: Education */}
     {resumeData.education.collegename? <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.sectionBorder}></View>
        <Text style={styles.text}>{`${resumeData.education.collegename||''},${resumeData.education.place||''}`}</Text>
        <Text style={styles.subText}>{`${resumeData.education.branch?`${resumeData.education.course||''} in ${resumeData.education.branch||''}`:`${resumeData.education.course||''} `} ${resumeData.education.percentage?`,with Percentage:${resumeData.education.percentage||''}`:''}`}</Text>
        <Text style={styles.subText}>{ `${resumeData.education.startdate ?`Duration: ${resumeData.education.startdate||''} to ${resumeData.education.enddate||''}` :''}` }</Text>
      </View>:''}

      {/* Section: Programming Skills */}
      {resumeData.skills.language.length>1 && <View style={styles.section}>
        <Text style={styles.sectionTitle}> Skills</Text>
        <View style={styles.sectionBorder}></View>
        <View style={styles.row}>
          <Text style={styles.text}>{`Languages: ${resumeData.skills.language} `}</Text>
         {resumeData.skills.vcontrol && <Text style={styles.text}>{`Version Control: ${resumeData.skills.vcontrol}`}</Text>}
        </View>
        <View style={styles.row}>
          {resumeData.skills.technologies && <Text style={styles.text}>{`Technologies: ${resumeData.skills.technologies}`}</Text>}
        </View>
        <View style={styles.row}>
          {resumeData.skills.skill && <Text style={styles.text}>{`Skills: ${resumeData.skills.skill}`}</Text>}
        </View>
      </View>
      }
      {/* Section: Experience */}
      { resumeData.experience && 
      <View>
        <View style={styles.section}>
        {resumeData.experience.company && <Text style={styles.sectionTitle}>Experience</Text>}
        <View style={styles.sectionBorder}></View>
          <Text style={styles.title}>{resumeData.experience.company}</Text>
          <Text style={styles.text}>{resumeData.experience.profession}</Text>
          <Text style={styles.text}>{`${resumeData.experience.city}, ${resumeData.experience.state}`}</Text>
        </View>
        <View>
          {resumeData.experience.summaries.map((summary, summaryIndex) => (
            <View key={summaryIndex} style={styles.row}>
              <Text style={styles.text}>{`• ${summary}`}</Text>
            </View>
          ))}
        </View>
      </View>
   }

      

      {/* Section: Projects */}
      {resumeData.projects.projects.length>0 && <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        <View style={styles.sectionBorder}></View>
        <View>
    {resumeData.projects.projects.map((project, projectIndex) => (
        <View key={projectIndex} >
         <Text style={styles.title}>{`${projectIndex+1} ${project.projectname}`}</Text>
        <Text style={styles.text}>{`  ${project.project}`}</Text>
        </View>
        ))}

        </View>
       
      </View>}

      {/* Section: Certification */}
      { console.log(resumeData.certification.certification)}
      {
      resumeData.certification.certification && <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certification</Text>
        <View style={styles.sectionBorder}></View>
        <View>
    {resumeData.certification.certification.map((certificate, index) => (
        <View key={index} >
         <Text style={styles.title}>{`${index+1} ${certificate.certificate}`}</Text>
        <Text style={styles.text}>{`  ${certificate.description}`}</Text>
        </View>
        ))}

        </View>
       
      </View>}
    </Page>
  </Document>
);

const styles = StyleSheet.create({
    body: {
      padding: 40,
      fontFamily: 'Helvetica',
      fontSize: 12,
      color: '#ecf0f1',
      backgroundColor: '#2c3e50',
      lineHeight: 1.6,
    },
    header: {
      marginBottom: 30,
      borderBottomWidth: 2,
      borderBottomColor: '#1abc9c',
      paddingBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    name: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#1abc9c',
      textTransform: 'uppercase',
      letterSpacing: 2,
    },
    profession: {
      fontSize: 18,
      color: '#ecf0f1',
      marginTop: 5,
      textTransform: 'uppercase',
    },
    contact: {
      fontSize: 12,
      color: '#bdc3c7',
      marginBottom: 4,
      textAlign: 'right',
    },
    link: {
      fontSize: 12,
      color: '#3498db',
      textDecoration: 'underline',
      marginBottom: 2,
      marginRight: 10,
    },
    section: {
      marginBottom: 20,
      padding: 15,
      backgroundColor: '#34495e',
      borderRadius: 8,
      borderLeftWidth: 5,
      borderLeftColor: '#1abc9c',
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#ecf0f1',
      marginBottom: 10,
      textTransform: 'uppercase',
      letterSpacing: 1.5,
    },
    sectionBorder: {
      height: 2,
      backgroundColor: '#1abc9c',
      marginBottom: 10,
    },
    text: {
      fontSize: 12,
      marginBottom: 8,
      color: '#ecf0f1',
      lineHeight: 1.8,
    },
    subText: {
      fontSize: 10,
      color: '#bdc3c7',
      marginBottom: 6,
      lineHeight: 1.6,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ecf0f1',
      marginBottom: 8,
    },
    bulletPoint: {
      marginRight: 5,
      color: '#1abc9c',
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    sectionIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
      color: '#1abc9c',
    },
    linkIcon: {
      width: 14,
      height: 14,
      marginRight: 5,
    },
  });
  
  
  export default Template4