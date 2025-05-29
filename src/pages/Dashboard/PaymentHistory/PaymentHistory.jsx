import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
        Total Payments: {payments.length}
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100 text-gray-800 text-sm sm:text-base">
            <tr>
              <th className="px-4 py-2 text-left border">#</th>
              <th className="px-4 py-2 text-left border">Price</th>
              <th className="px-4 py-2 text-left border">Transaction ID</th>
              <th className="px-4 py-2 text-left border">Status</th>
              <th className="px-4 py-2 text-left border">Date</th>
            </tr>
          </thead>
          <tbody className="text-sm sm:text-base">
            {payments.map((payment, index) => (
              <tr key={payment._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">${payment.price}</td>
                <td className="px-4 py-2 border break-all">
                  {payment.transactionId}
                </td>
                <td className="px-4 py-2 border text-yellow-500">
                  {payment.status}
                </td>
                <td className="px-4 py-2 border">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
