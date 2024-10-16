import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

const Template1 = ({ resumeData }) => (
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
      color: '#2c3e50',
    },
    header: {
      marginBottom: 30,
      borderBottom: '2px solid #ecf0f1',
      paddingBottom: 10,
    },
    name: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#2980b9',
    },
    contact: {
      fontSize: 12,
      color: '#34495e',
      marginBottom: 4,
    },
    link: {
      fontSize: 12,
      color: '#2980b9',
      textDecoration: 'underline',
      marginBottom: 2,
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#2980b9',
      borderBottom: '1px solid #bdc3c7',
      paddingBottom: 5,
      marginBottom: 10,
    },
    text: {
      fontSize: 12,
      marginBottom: 5,
    },
    subText: {
      fontSize: 10,
      color: '#7f8c8d',
      marginBottom: 5,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 4,
    },
  });
export default Template1