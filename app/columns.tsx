"use client"

import { FacilityType } from "@/lib/data"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"
import { toast } from "sonner"


export const columns: ColumnDef<FacilityType>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {

            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "address",
        cell: ({ row }) => {
            const facility = row.original
            return (
                <Button
                    variant="ghost"
                    className="hover:bg-blue-500 hover:text-white rounded-xl"
                    onClick={() => {
                        navigator.clipboard.writeText(facility.address)
                        toast.success("Copied to clipboard")
                    }}
                >
                    {facility.address}
                </Button>
            )
        },
        header: "Address"
    },
    {
        accessorKey: "mainline",
        cell: ({ row }) => {
            const facility = row.original
            return (
                <Button
                    variant="ghost"
                    className="hover:bg-yellow-300 rounded-xl p-2"
                    onClick={() => {
                        navigator.clipboard.writeText(facility.mainline)
                        toast.success("Copied to clipboard")
                    }}
                >
                    {facility.mainline}
                </Button>
            )
        },
        header: "Main Line"
    },
    {
        accessorKey: "medicalRecords",
        cell: ({ row }) => {
            const facility = row.original
            return (
                <Button
                    variant="ghost"
                    className="hover:bg-green-300 rounded-xl p-2"
                    onClick={() => {
                        navigator.clipboard.writeText(facility.medicalRecords)
                        toast.success("Copied to clipboard")
                    }}
                >
                    {facility.medicalRecords}
                </Button>
            )
        },
        header: "Medical Records"
    },
    {
        accessorKey: "urReview",
        cell: ({ row }) => {
            const facility = row.original
            return (
                <Button
                    variant="ghost"
                    className="hover:bg-orange-400 rounded-xl p-2"
                    onClick={() => {
                        navigator.clipboard.writeText(facility.urReview)
                        toast.success("Copied to clipboard")
                    }}
                >
                    {facility.urReview}
                </Button>
            )
        },
        header: "UR Review"
    },
    {
        accessorKey: "urReviewFax",
        cell: ({ row }) => {
            const facility = row.original
            return (
                <Button
                    variant="ghost"
                    className="hover:bg-purple-400 hover:text-white rounded-xl p-2"
                    onClick={() => {
                        navigator.clipboard.writeText(facility.urReviewFax)
                        toast.success("Copied to clipboard")
                    }}
                >
                    {facility.urReviewFax}
                </Button>
            )
        },
        header: "UR Fax"
    },
    {
        accessorKey: "admitting",
        header: "Admitting"
    },
    // {
    //     id: "actions",
    //     cell: ({ row }) => {
    //         const facility = row.original
    //         return (
    //             <DropdownMenu>
    //                 <DropdownMenuTrigger asChild>
    //                     <Button variant="ghost" className="h-8 w-8 p-0">
    //                         <span className="sr-only">Open menu</span>
    //                         <MoreHorizontal className="h-4 w-4" />
    //                     </Button>
    //                 </DropdownMenuTrigger>
    //                 <DropdownMenuContent className="text-blue-500" align="start">
    //                     <DropdownMenuLabel>Copy</DropdownMenuLabel>
    //                     <DropdownMenuItem
    //                         className="hover:cursor-pointer"
    //                         onClick={() => navigator.clipboard.writeText(facility.name)}
    //                     >
    //                         Name
    //                     </DropdownMenuItem>
    //                     <DropdownMenuItem
    //                         className="hover:cursor-pointer"
    //                         onClick={() => navigator.clipboard.writeText(facility.mainline)}
    //                     >
    //                         Main
    //                     </DropdownMenuItem>
    //                     <DropdownMenuItem
    //                         className="hover:cursor-pointer"
    //                         onClick={() => navigator.clipboard.writeText(facility.medicalRecords)}
    //                     >
    //                         Medical Records
    //                     </DropdownMenuItem>
    //                     <DropdownMenuItem
    //                         className="hover:cursor-pointer"
    //                         onClick={() => navigator.clipboard.writeText(facility.urReview)}
    //                     >
    //                         UR phone
    //                     </DropdownMenuItem>
    //                     <DropdownMenuItem
    //                         className="hover:cursor-pointer"
    //                         onClick={() => navigator.clipboard.writeText(facility.urReviewFax)}
    //                     >
    //                         UR Fax
    //                     </DropdownMenuItem>
    //                 </DropdownMenuContent>
    //             </DropdownMenu>
    //         )
    //     },
    // },
]
