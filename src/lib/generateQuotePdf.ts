import jsPDF from "jspdf";
import "jspdf-autotable";
import type { BaseResult } from "./solarSizingEngine";

// Extend jsPDF type for autotable
declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

export interface QuoteCustomer {
  name: string;
  phone: string;
  address?: string;
}

export interface QuoteData {
  customer: QuoteCustomer;
  result: BaseResult;
  systemType: string;
  panelPrice?: number;
  inverterPrice?: number;
  batteryPrice?: number;
  lang: "ar" | "en";
}

// Generate unique quote number
function generateQuoteNumber(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
  return `${year}${month}${day}-${random}`;
}

// Format date
function formatDate(lang: "ar" | "en"): string {
  const now = new Date();
  if (lang === "ar") {
    return now.toLocaleDateString("ar-YE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Estimated prices (these would ideally come from a database)
const ESTIMATED_PRICES = {
  panel685: 180,
  panel670: 170,
  panel580: 150,
  panel550: 140,
  panel450: 120,
  inverterPerKw: 150,
  batteryPylontech: 1000,
  cables: 5,
  accessories: 50,
  installationPerKw: 100,
};

export function generateQuotePdf(data: QuoteData): void {
  const { customer, result, systemType, lang } = data;
  const isRTL = lang === "ar";

  // Create PDF
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  let yPos = margin;

  // Colors
  const primaryColor: [number, number, number] = [30, 58, 95]; // Dark blue
  const secondaryColor: [number, number, number] = [218, 165, 32]; // Gold
  const textColor: [number, number, number] = [50, 50, 50];

  // Header background
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, pageWidth, 45, "F");

  // Company name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  const companyName = isRTL
    ? "Al-Qatta Solar Energy Systems"
    : "Al-Qatta Solar Energy Systems";
  doc.text(companyName, pageWidth / 2, 20, { align: "center" });

  // Subtitle
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const subtitle = isRTL
    ? "Authorized Pylontech Agent in Yemen"
    : "Authorized Pylontech Agent in Yemen";
  doc.text(subtitle, pageWidth / 2, 28, { align: "center" });

  // Contact info
  doc.setFontSize(8);
  doc.text("Tel: +967 777 800 063 | www.alqatta.com | info@alqatta.com", pageWidth / 2, 36, {
    align: "center",
  });

  yPos = 55;

  // Quotation title
  doc.setTextColor(...secondaryColor);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text(isRTL ? "QUOTATION" : "QUOTATION", pageWidth / 2, yPos, { align: "center" });

  yPos += 15;

  // Quote info box
  doc.setDrawColor(...primaryColor);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 25, 3, 3, "S");

  doc.setTextColor(...textColor);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  const quoteNumber = generateQuoteNumber();
  const quoteDate = formatDate(lang);

  doc.text(`${isRTL ? "Quote No:" : "Quote No:"} ${quoteNumber}`, margin + 5, yPos + 8);
  doc.text(`${isRTL ? "Date:" : "Date:"} ${quoteDate}`, margin + 5, yPos + 16);
  doc.text(`${isRTL ? "Customer:" : "Customer:"} ${customer.name}`, pageWidth / 2, yPos + 8);
  doc.text(`${isRTL ? "Phone:" : "Phone:"} ${customer.phone}`, pageWidth / 2, yPos + 16);

  yPos += 35;

  // System type label
  const systemTypeLabels: Record<string, { ar: string; en: string }> = {
    home: { ar: "Residential System", en: "Residential System" },
    commercial: { ar: "Commercial System", en: "Commercial System" },
    industrial: { ar: "Industrial System", en: "Industrial System" },
    agricultural: { ar: "Agricultural System", en: "Agricultural System" },
  };

  doc.setFillColor(245, 245, 245);
  doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 10, 2, 2, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(
    `System Type: ${systemTypeLabels[systemType]?.en || systemType}`,
    pageWidth / 2,
    yPos + 7,
    { align: "center" }
  );

  yPos += 18;

  // Calculate prices
  const panelWatt = result.panel.watt;
  let panelUnitPrice = ESTIMATED_PRICES.panel580;
  if (panelWatt >= 685) panelUnitPrice = ESTIMATED_PRICES.panel685;
  else if (panelWatt >= 670) panelUnitPrice = ESTIMATED_PRICES.panel670;
  else if (panelWatt >= 550) panelUnitPrice = ESTIMATED_PRICES.panel550;
  else if (panelWatt >= 450) panelUnitPrice = ESTIMATED_PRICES.panel450;

  const panelsCount = result.panelsCount || 0;
  const panelsTotal = panelsCount * panelUnitPrice;

  const inverterKw = (result.inverterW || 0) / 1000;
  const inverterPrice = Math.round(inverterKw * ESTIMATED_PRICES.inverterPerKw * 1.5);

  const batteriesCount = result.batteriesCount || 0;
  const batteriesTotal = batteriesCount * ESTIMATED_PRICES.batteryPylontech;

  const cablesEstimate = panelsCount * 3 * ESTIMATED_PRICES.cables;
  const accessoriesEstimate = ESTIMATED_PRICES.accessories * Math.max(1, Math.ceil(panelsCount / 4));
  const installationEstimate = Math.round((result.systemKw || 1) * ESTIMATED_PRICES.installationPerKw);

  // Build table data
  const tableData: any[] = [];
  let itemNo = 1;

  // Solar Panels
  if (panelsCount > 0) {
    tableData.push([
      itemNo++,
      `Solar Panel ${result.panel.name.en}\n- Power: ${panelWatt}W\n- Type: N-Type Mono\n- Warranty: 25 Years`,
      "Pcs",
      panelsCount,
      panelUnitPrice,
      panelsTotal,
    ]);
  }

  // Inverter
  if (result.inverterW && result.inverterW > 0) {
    tableData.push([
      itemNo++,
      `Hybrid Inverter\n- Power: ${Math.round(result.inverterW)}W\n- Type: MPPT\n- Warranty: 2 Years`,
      "Pcs",
      1,
      inverterPrice,
      inverterPrice,
    ]);
  }

  // Batteries
  if (batteriesCount > 0) {
    tableData.push([
      itemNo++,
      `Pylontech Lithium Battery\n- Capacity: 4.8kWh (US5000)\n- Voltage: 48V\n- Warranty: 10 Years`,
      "Pcs",
      batteriesCount,
      ESTIMATED_PRICES.batteryPylontech,
      batteriesTotal,
    ]);
  }

  // Cables
  tableData.push([
    itemNo++,
    "DC Solar Cables\n- PV Grade 1500V\n- UV Protected",
    "Set",
    1,
    cablesEstimate,
    cablesEstimate,
  ]);

  // Accessories
  tableData.push([
    itemNo++,
    "Accessories & Protection\n- MC4 Connectors, Fuses\n- Surge Protection, Breakers",
    "Set",
    1,
    accessoriesEstimate,
    accessoriesEstimate,
  ]);

  // Installation
  tableData.push([
    itemNo++,
    "Installation & Setup\n- Professional Installation\n- System Configuration\n- Testing & Commissioning",
    "Service",
    1,
    installationEstimate,
    installationEstimate,
  ]);

  // Products table
  doc.autoTable({
    startY: yPos,
    head: [["No", "Description", "Unit", "Qty", "Unit Price ($)", "Total ($)"]],
    body: tableData,
    theme: "grid",
    headStyles: {
      fillColor: primaryColor,
      textColor: [255, 255, 255],
      fontStyle: "bold",
      halign: "center",
      fontSize: 9,
    },
    bodyStyles: {
      fontSize: 8,
      textColor: textColor,
      cellPadding: 3,
    },
    columnStyles: {
      0: { halign: "center", cellWidth: 10 },
      1: { cellWidth: 70 },
      2: { halign: "center", cellWidth: 15 },
      3: { halign: "center", cellWidth: 15 },
      4: { halign: "right", cellWidth: 25 },
      5: { halign: "right", cellWidth: 25 },
    },
    margin: { left: margin, right: margin },
    didDrawPage: function (data: any) {
      // Footer on each page
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(
        `Page ${data.pageNumber}`,
        pageWidth / 2,
        pageHeight - 10,
        { align: "center" }
      );
    },
  });

  // Get final Y position after table
  const finalY = (doc as any).lastAutoTable.finalY + 10;

  // Total calculation
  const grandTotal = panelsTotal + inverterPrice + batteriesTotal + cablesEstimate + accessoriesEstimate + installationEstimate;

  // Total box
  doc.setFillColor(...primaryColor);
  doc.roundedRect(pageWidth - margin - 60, finalY, 60, 15, 2, 2, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text(`Total: $${grandTotal.toLocaleString()}`, pageWidth - margin - 30, finalY + 10, {
    align: "center",
  });

  // Notes section
  const notesY = finalY + 25;
  doc.setTextColor(...textColor);
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text("Notes:", margin, notesY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  const notes = [
    "- Prices are estimates and may vary based on site conditions.",
    "- Cable lengths are adjustable based on installation requirements.",
    "- Mounting structure cost depends on roof/ground type.",
    "- Quotation valid for 14 days from date of issue.",
    "- Payment terms: 50% advance, 50% on completion.",
  ];
  notes.forEach((note, i) => {
    doc.text(note, margin, notesY + 6 + i * 5);
  });

  // Footer
  const footerY = pageHeight - 25;
  doc.setDrawColor(...primaryColor);
  doc.setLineWidth(0.3);
  doc.line(margin, footerY, pageWidth - margin, footerY);

  doc.setFontSize(8);
  doc.setTextColor(...primaryColor);
  doc.text("Al-Qatta Corporation for Solar Energy Systems", margin, footerY + 6);
  doc.text("Authorized Pylontech Dealer in Yemen", margin, footerY + 11);

  doc.setTextColor(100, 100, 100);
  doc.text(
    "Phone: +967 777 800 063 | +967 1 237 379",
    pageWidth - margin,
    footerY + 6,
    { align: "right" }
  );
  doc.text("www.alqatta.com | info@alqatta.com", pageWidth - margin, footerY + 11, {
    align: "right",
  });

  // Save the PDF
  const fileName = `AlQatta-Quote-${quoteNumber}.pdf`;
  doc.save(fileName);
}
