import React, { useState, useContext, useMemo } from "react";
import "./addon.css";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { MenuContext } from "../MenuContext"; // Import the MenuContext

const Addon = () => {
    const { menu } = useContext(MenuContext); // Get the menu from the context

    const memoObj = useMemo(() => {
        return menu.filter(item => item?.category === "addon");
    }, [menu]);

    const [openBottom, setOpenBottom] = useState(false);
    const openDrawerBottom = () => setOpenBottom(true);
    const closeDrawerBottom = () => setOpenBottom(false);

    return (
        <>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
                <Button onClick={openDrawerBottom}>Add ON</Button>
            </div>

            <Drawer
                placement="bottom"
                open={openBottom}
                onClose={closeDrawerBottom}
                className="p-4"
            >
                <div className="mb-3 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Add ON
                    </Typography>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={closeDrawerBottom}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>

                <div className="mb-5 pr-4 font-normal">
                    {memoObj.length > 0 ? (
                        memoObj.map((item, index) => (
                            <div key={index} className="flex py-1 items-center border-b border-gray-200">
                                <div className="w-12 h-12"> 
                                    <img src={item.image[0]} alt="" className="object-cover w-full h-full rounded-md shadow-sm" />
                                </div>
                                <div className="ml-4 flex-1">
                                    <div className="text-md font-semibold">{item.name}</div>
                                    <div>₹{item.price}</div>
                                </div>
                                <div>
                                    <label className="ui-bookmark">
                                        <input type="checkbox" />
                                        <div className="bookmark">
                                            <svg
                                                viewBox="0 0 16 16"
                                                style={{ marginTop: '4px' }}
                                                className="bi bi-heart-fill"
                                                height="25"
                                                width="25"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                                                    fillRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No items found</p>
                    )}
                </div>
            </Drawer>
        </>
    );
}

export default Addon;
