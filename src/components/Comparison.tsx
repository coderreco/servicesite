import { Table } from "@medusajs/ui";
import { Container } from "./Container";

const featureComparison = [
  {
    Feature: "Build Time",
    OurService: "1-2 weeks",
    AgencyBuilt: "4-12 weeks",
    DIY: "Varies widely"
  },
  {
    Feature: "SEO Optimization",
    OurService: "Tailored local SEO by an expert",
    AgencyBuilt: "General SEO, possibly outsourced",
    DIY: "Basic SEO, often user-managed"
  },
  {
    Feature: "Conversion Optimization",
    OurService: "High, with conversion-focused design",
    AgencyBuilt: "Varies, not always prioritized",
    DIY: "Low, requires extensive research"
  },
  {
    Feature: "Template Features",
    OurService: "Specialized for cleaning businesses",
    AgencyBuilt: "Generic or custom, not industry-specific",
    DIY: "Generic, broad options"
  },
  {
    Feature: "Included Services",
    OurService: "Comprehensive: Hosting, customization, support, training",
    AgencyBuilt: "Often limited, with extra fees for additional services",
    DIY: "Limited, often with upsells for more features"
  },
  {
    Feature: "Customization and Flexibility",
    OurService: "High customization with expert guidance",
    AgencyBuilt: "Customization possible but expensive",
    DIY: "Limited by platform capabilities"
  },
  {
    Feature: "Ongoing Support and Maintenance",
    OurService: "Included",
    AgencyBuilt: "Usually available at extra cost",
    DIY: "Self-managed, community support"
  },
  {
    Feature: "Industry Expertise",
    OurService: "High, focused on home service businesses",
    AgencyBuilt: "Varies, not always specialized",
    DIY: "None, general-purpose solutions"
  },
  {
    Feature: "Effort from Business Owner",
    OurService: "Low, mostly in initial content provision",
    AgencyBuilt: "Medium, requires more oversight",
    DIY: "High, requires learning and management"
  },
  {
    Feature: "Performance and Speed Optimization",
    OurService: "Optimized for best user experience",
    AgencyBuilt: "Varies, can be overlooked",
    DIY: "Often not optimized, depends on platform"
  },
  {
    Feature: "Mobile Optimization",
    OurService: "Fully responsive design",
    AgencyBuilt: "Generally responsive",
    DIY: "Responsive but may require adjustments"
  },
  {
    Feature: "Security",
    OurService: "High, with ongoing updates",
    AgencyBuilt: "High, varies by agency",
    DIY: "Basic, depends on user upkeep"
  },
  {
    Feature: "Overall Value",
    OurService: "High value, specialized service at an affordable cost",
    AgencyBuilt: "High cost, best for bespoke needs",
    DIY: "Economical, time-consuming with mixed results"
  }
];

export default function Comparison() {
  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <Container>
        <div className="mx-auto max-w-3xl mb-16 md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            How do we fare against the competition?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our process is so simple that people can’t help but fall in love
            with it.
          </p>
        </div>
        <div className="overflow-x-auto">
          <Table className="min-w-full">
            <Table.Header className="border-y-0">
              <Table.Row className="bg-transparent !border-t-0 font-bold *:min-w-52 *:px-2 lg:*:px-4 *:pt-10 *:pb-4">
                <Table.HeaderCell className="font-bold"></Table.HeaderCell>
                <Table.HeaderCell className="bg-emerald-600 text-white font-bold rounded-t-4xl">
                  Our Service
                  <p className=" flex items-baseline gap-x-1">
                  <span className="text-xl font-bold">$1,197</span>
                  </p>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  Agency Built
                  <p className=" flex items-baseline gap-x-1 text-gray-900">
                <span className="text-xl font-bold">$5,000–$10,000</span>
              </p>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  DIY
                  <p className=" flex items-baseline gap-x-1 text-gray-900">
                <span className="text-xl font-bold">$20–$300</span>
                <span className="text-sm font-semibold">/month</span>
              </p>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row className="bg-transparent *:min-w-52 *:px-2 lg:*:px-4 *:py-1">
                  <Table.Cell className="font-bold">Feature</Table.Cell>
                  <Table.Cell className="bg-emerald-600 text-white font-bold"></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              {featureComparison.map((row, index) => (
                <Table.Row key={index} className="bg-transparent hover:bg-gray-100 *:min-w-52 *:px-2 lg:*:px-4 *:py-1">
                  <Table.Cell className="">{row.Feature}</Table.Cell>
                  <Table.Cell className="bg-emerald-600 text-white font-bold">{row.OurService}</Table.Cell>
                  <Table.Cell>{row.AgencyBuilt}</Table.Cell>
                  <Table.Cell>{row.DIY}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
            </Table>
          </div>
      </Container>
      
    </section>
  );
 }