import { useUser } from '@clerk/clerk-react'
import { useState } from 'react';
import { workoutContext } from '../../context/WorkoutContext';
import workouts from '../../context/Workouts';
import { use } from 'react';
import { useContext } from 'react';
const Card = ({date, exercises})=>{
    return(
        <div className='bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6 w-full'>
            <div className='flex items-center justify-between mb-4'>
                <h3 className='text-xl font-bold text-gray-800'>
                    <span className='text-blue-600'>📅</span> {date}
                </h3>
                <span className='text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full'>
                    {exercises?.length || 0} exercises
                </span>
            </div>
            {
                exercises && exercises.length > 0 ? (
                    <ul className='space-y-2'>
                        {exercises.map((exercise, index) => (
                            <li key={index} className='flex items-center text-gray-700 bg-linear-to-r from-blue-50 to-transparent p-3 rounded-lg hover:from-blue-100 transition-colors duration-200'>
                                <span className='text-blue-500 mr-3 font-bold'>💪</span>
                                <span className='font-medium'>{workouts[exercise]}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className='text-gray-500 italic text-center py-4'>No exercises logged for this workout.</p>
                )
            }
        </div>
    )
}
const Dashboard = () => {
    const user = useUser();
    const [isLoggedin, setIsLoggedin] = useState(user.isSignedIn);
    const { data, loading, } = useContext(workoutContext);
  return ( 
    <div>
          {
            isLoggedin ? (
                <div className='max-w-3xl mx-auto p-4'>
                    <h2 className='text-2xl font-bold mb-4'>Workout Dashboard</h2>
                    {loading && <p>Loading...</p>}
                    {data && data.user.workouts.length > 0 ? (
                        data.user.workouts.map((workout, index) => (
                            <Card key={index} date={workout.date} exercises={workout.exercise} />
                        ))
                    ) : (
                        <p>No workouts logged yet.</p>
                    )}
                </div>
            ) : (
                <p className='text-center mt-10'>Please log in to view your dashboard.</p>
            )
          }
    </div>
  )
}

export default Dashboard