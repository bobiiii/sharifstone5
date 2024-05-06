import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='flex flex-col gap-3 justify-center items-center text-center  h-screen'>
                    <h1 className='text-xl font-semibold text-black'>
                        Something went Wrong
                    </h1>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;