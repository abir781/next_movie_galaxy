// import { Badge } from "@/components/ui/badge"

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardAction,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"



// export function CardImage() {
//   return (
//     <Card className="relative mx-auto w-full max-w-sm pt-0">
//       <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
//       <img
//         src="https://avatar.vercel.sh/shadcn1"
//         alt="Event cover"
//         className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
//       />
//       <CardHeader>
//         <CardAction>
//           <Badge variant="secondary">Featured</Badge>
//         </CardAction>
//         <CardTitle>Design systems meetup</CardTitle>
//         <CardDescription>
//           A practical talk on component APIs, accessibility, and shipping
//           faster.
//         </CardDescription>
//       </CardHeader>
//       <CardFooter>
//         <Button className="w-full">View Event</Button>
//       </CardFooter>
//     </Card>
//   )
// }

// export default CardImage;


// "use client";

// import Image from "next/image";
// import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardAction } from "@shadcn/ui/card";
// import { Badge } from "@shadcn/ui/badge";
// import { Button } from "@shadcn/ui/button";

// export function CardImage() {
//   return (
//     <Card className="relative mx-auto w-full max-w-sm pt-0">
//       {/* Overlay */}
//       <div className="absolute inset-0 z-30 aspect-video bg-black/35" />

//       {/* Movie / Event Image */}
//       <div className="relative z-20 aspect-video w-full">
//         <Image
//           src="https://avatar.vercel.sh/shadcn1"
//           alt="Event cover"
//           fill
//           className="object-cover brightness-60 grayscale dark:brightness-40"
//         />
//       </div>

//       {/* Card Content */}
//       <CardHeader>
//         <CardAction>
//           <Badge variant="secondary">Featured</Badge>
//         </CardAction>
//         <CardTitle>Design systems meetup</CardTitle>
//         <CardDescription>
//           A practical talk on component APIs, accessibility, and shipping faster.
//         </CardDescription>
//       </CardHeader>

//       <CardFooter>
//         <Button className="w-full">View Event</Button>
//       </CardFooter>
//     </Card>
//   );
// }

// export default CardImage;
