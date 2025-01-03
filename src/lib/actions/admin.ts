"use server";

import { Role } from "@prisma/client";
import prisma from "../prisma";

const adminHome = async () => {
  try {
    const totalListingsPromise = prisma.tour.count();
    const totalUserCountPromise = prisma.user.count();
    const totalVendorCountPromise = prisma.user.count({
      where: {
        role: "vendor",
      },
    });

    const totalBookingsPromise = prisma.booking.findMany({
      where: {
        status: "completed",
      },
      select: {
        tour: {
          select: {
            price: true,
          },
        },
      },
    });

    const [totalListings, totalUsers, totalVendors, allBookings] =
      await Promise.all([
        totalListingsPromise,
        totalUserCountPromise,
        totalVendorCountPromise,
        totalBookingsPromise,
      ]);

    const totalEarnings = allBookings.reduce(
      (acc, stat) => acc + stat.tour.price,
      0
    );

    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentMonth = new Date().getMonth();

    const chartData = [];
    const visitorsData = [];

    for (let i = currentMonth - 5; i <= month.length; i++) {
      if (i < 0) {
        i = month.length  - 5;
      }

      if (i === month.length) {
        i = 0;
      }

      if (chartData.length === 6 && visitorsData.length === 6) {
        break;
      }



      const chartObject = {
        month: month[i],
        joined: Math.round(Math.random() * 300),
      };

      const visitorObject = {
        month: month[i],
        newCustomers: Math.round(Math.random() * 214),
        existingCustomers: Math.round(Math.random() * 214),
      };
      chartData.push(chartObject);
      visitorsData.push(visitorObject);
    }

    return {
      totalListings,
      totalUsers,
      totalVendors,
      totalEarnings,
      chartData,
      visitorsData,
    };
  } catch (err: any) {
    return {
      totalListings: 0,
      totalUsers: 0,
      totalVendors: 0,
      totalEarnings: 0,
      chartData: [],
      visitorsData: [],
    };
  }
};

const adminAllBookings = async () => {
  try {
    const bookedTours = await prisma.booking.findMany({
      include: {
        tour: {
          select: {
            tourName: true,
            gallery: true,
            price: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      bookings: bookedTours,
    };
  } catch (err: any) {
    return {
      bookings: [],
    };
  }
};

const adminAllEarnings = async () => {
  try {
    const bookings = await prisma.booking.findMany({
      where: {
        status: {
          equals: "completed",
          mode: "insensitive",
        },
      },
      include: {
        tour: {
          select: {
            price: true,
          },
        },
      },
    });

    const totalEarnings: number =
      bookings?.reduce((acc, stat) => acc + stat.tour.price, 0) || 0;

    const withdraws = await prisma.withdraw.findMany({
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    return {
      totalEarnings,
      salesThisMonth: Math.round(Math.random() * 500),
      withdraws,
    };
  } catch (err: any) {
    return {
      totalEarnings: 0,
      salesThisMonth: 0,
      withdraws: [],
    };
  }
};

const updateWithdrawStatus = async (id: string) => {
  try {
    const data = await prisma.withdraw.update({
      where: {
        id,
      },
      data: {
        status: "approved",
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    return {
      success: true,
      data,
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Something went wrong while updating withdraw status",
    };
  }
};

const allUsers = async(role:Role)=>{
  try{

    const users = await prisma.user.findMany({
      where:{
        role
      },
      orderBy:{
        joinedAt:'desc'
      }
    });

    return {
      users
    }

  }catch(err:any){
    return{
      users:[]
    }
  }
}

export { adminHome, adminAllBookings, adminAllEarnings, updateWithdrawStatus,allUsers };
