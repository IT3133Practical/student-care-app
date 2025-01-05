import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { Divider } from 'react-native-paper'
import Course from '../../types/CourseType'
import User from '../../types/UserType'
import { courses } from '../../../assets/data/StudentsDb'
import Footer from '../../components/footer/Footer'
import Logo from '../../components/logo/Logo'

interface CoursesProps {
    route: {
        params: {
            user: User
        }
    }
}

export default function Courses({ route }: CoursesProps) {
    const { user } = route.params
    const course = courses.find((course: Course) => course.id === user.course_id)

    if (!course) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.centerContainer}>
                    <Text style={styles.title}>Course not found</Text>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.logoContainer}>
                    <Logo />
                </View>
                <View style={styles.centerContainer}>
                    <View style={styles.card}>
                        <Text style={styles.title}>{course.name}</Text>
                        <Text style={styles.description}>
                            Code: {course.course_code} | Dept: {course.department}
                        </Text>
                        <Divider style={{ width: '80%', marginVertical: 20, backgroundColor: '#ccc' }} />
                        <View style={styles.courseInfo}>
                            <Text style={styles.subtitle}>Course Information</Text>
                            <Text style={styles.description}>Code: {course.course_code}</Text>
                            <Text style={styles.description}>Department: {course.department}</Text>
                            <Text style={styles.description}>Duration: {course.duration}</Text>
                            <Text style={styles.description}>Description: {course.description}</Text>
                            <Divider style={{ width: '80%', marginVertical: 20, backgroundColor: '#ccc' }} />
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
        boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.25)', // Updated to use boxShadow
        elevation: 5,
        padding: 15,
        margin: 10,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
    },
    courseInfo: {
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

