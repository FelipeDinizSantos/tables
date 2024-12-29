'use client';

import "./Tables.css";

import InformationRequestTable from "@/components/InformationRequestTable";
import SendingDocsTable from "@/components/SendingDocsTable";

export default function Tables() {
  return (
    <div>
      <SendingDocsTable />
      <InformationRequestTable />
    </div>
  )
}