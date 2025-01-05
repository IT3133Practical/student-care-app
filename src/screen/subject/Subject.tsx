import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import Logo from '../../components/logo/Logo'
import Footer from '../../components/footer/Footer'
import { Divider, DataTable } from 'react-native-paper'
import { subjects, marks, courses } from '../../../assets/data/StudentsDb'

interface Subject {
  id: number
  name: string
  course_id: number
}

interface Mark {
  id: number
  student_id: number
  subject_id: number
  marks: number
}

interface Course {
  id: number
  name: string
}

interface User {
  id: number
  name: string
  course_id: number
}

interface CoursesProps {
  route: {
    params: {
      user: User
    }
  }
}

export default function Courses({ route }: CoursesProps) {
  const { user } = route.params

  const userSubjects = subjects.filter((subject: Subject) => subject.course_id === user.course_id)
  const userMarks = marks.filter((mark) => mark.student_id === user.id) as Mark[]

  const matchMarks = (subjectId: number): string | number => {
    const mark = userMarks.find((m) => m.subject_id === subjectId)
    return mark ? mark.marks : '-'
  }

  const average = (): number => {
    if (userMarks.length === 0) return 0
    const total = userMarks.reduce((sum, m) => sum + m.marks, 0)
    return Math.round(total / userMarks.length)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>
              {courses.find((c: Course) => c.id === user.course_id)?.name}
            </Text>
            <Text style={styles.description}>
              {userSubjects.length} Subjects | Average: {average()}
            </Text>
            <Divider
              style={{ width: '80%', marginVertical: 20, backgroundColor: '#ccc' }}
            />
            <View style={styles.marksInfo}>
              <Text style={styles.subtitle}>Marks Information</Text>
              <DataTable style={{ paddingBottom: 20 }}>
                <DataTable.Header>
                  <DataTable.Title>Subject</DataTable.Title>
                  <DataTable.Title numeric>Mark</DataTable.Title>
                </DataTable.Header>

                {userSubjects.map((subject) => (
                  <DataTable.Row key={subject.id}>
                    <DataTable.Cell>{subject.name}</DataTable.Cell>
                    <DataTable.Cell numeric>{matchMarks(subject.id)}</DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  marksInfo: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    elevation: 5,
    paddingHorizontal: 10,
  },
  title: {
    paddingTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
})
