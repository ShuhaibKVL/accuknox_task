import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError : false}
    }

    static getDerivedStateFromError(error){
        // Update state so the next render shows the fallback UI.
        return { hasError : true}
    }

    componentDidCatch(error,errorInfo){
         // You can also log the error to an error reporting service
        console.error("Error caught in Error Boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='w-full h-screen flex justify-center items-center'>
                    <h1 className=''>Something went wrong.</h1>
                </div>
            );
        }

        return this.props.children
    }
}

export default ErrorBoundary;