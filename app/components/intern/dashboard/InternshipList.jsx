import {formatDistanceToNow} from "date-fns";
import Link from "next/link";

const InternshipList = ({internship}) => {
    return (
        <div className="internship-card flex flex-col gap-4 mb-2 relative">
            <div className="start flex flex-col mt-1 md:mt-6 sm:flex-row gap-4">
                <img
                    className={"h-14 logo logo-sq-14 cursor-pointer grid place-items-center ring-1 ring-green-500 text-white p-[2px] w-14 object-cover rounded-lg"}
                    src={internship.department.organization.logo}
                    alt={internship.department.organization.name}/>
                <div>
                    <div className="relative md:absolute text-xs flex gap-2 top-1 left-0">
                                                <span
                                                    className="bg-gray-300 px-2 py-1">{internship.type.toLowerCase()}</span>
                        <span
                            className="bg-gray-300 px-2 py-1">{internship.location.toLowerCase()}</span>
                    </div>
                </div>
                <div className="info flex flex-col gap-1">
                    <h1 className="text-2xl font-normal md:font-semibold">{internship.description}</h1>
                    <div
                        className="text-[1rem] text-gray-500 flex flex-wrap gap-2 font-medium">
                        <p className="">{internship.department.organization.name}</p>|
                        <p className="">{internship.department.name}</p>
                        <p className="">{formatDistanceToNow(new Date(internship.createdAt))} ago</p>
                    </div>
                </div>
            </div>

            <div className="button-container flex gap-3">
                <Link
                    className="btn rounded-md ring-1 ring-offset-1 ring-secondary btn-sm btn-primary"
                    href={"/intern/apply?internship=" + internship.id}>
                    Apply
                </Link>
            </div>
        </div>
    )
}

export default InternshipList;
