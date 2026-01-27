import React from 'react';

const Preloader = () => {
    return (
        <>
            <div id="preloader-active">
                <div className="preloader flex-1 content-center">
                    <div className="logo flex items-center justify-center h-screen w-screen jump">
                        <img
                            src="/assets/imgs/logos/noku-icon.svg"
                            alt="NoKu"
                            className="mx-auto"
                            style={{ width: 64, height: 64 }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preloader;
