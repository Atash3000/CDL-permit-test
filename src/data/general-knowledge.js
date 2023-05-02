export const generalKnowledge = [
  {
    id: 1,
    title: 'What is a CDL and why is it required to operate certain vehicles?',
    options: {
      a: 'A type of license required to operate any vehicle',
      b: "A license that proves an individual's commercial driving skills",
      c: 'A license required to operate certain types of vehicles',
      d: 'A license required to operate any size vehicle'
    },
    answer: 'c',
    explanation: 'License needed for: large vehicles, hazardous materials, 15+ passengers, or stretch limos'
  },
  {
    id: 2,
    title: 'What is the minimum GVWR for a single vehicle that requires a CDL or CLP to operate?',
    options: {
      a: '10,000 pounds',
      b: '15,000 pounds',
      c: '20,000 pounds',
      d: '26,001 pounds'
    },
    answer: 'd',
    explanation: 'Any single vehicle with a GVWR of 26,001 pounds or more requires a CDL or CLP to operate.'
  },
  {
    id: 3,
    title: 'If a trailer has a GVWR of more than 10,000 pounds, what other condition must be met for the driver to require a CDL or CLP?',
    options: {
      a: 'The trailer must be attached to a vehicle with a GVWR of 26,001 pounds or more',
      b: 'The trailer must be attached to a vehicle with a GVWR of 20,000 pounds or more',
      c: 'The trailer must be attached to a vehicle with a GVWR of 15,000 pounds or more',
      d: 'The trailer must be attached to a vehicle with a GVWR of any size'
    },
    answer: 'a',
    explanation: 'CDL/CLP needed for trailer with GVWR 10,000+ lbs if GCWR is 26,001+ lbs. GCWR is GVWR of power unit + GVWR of each vehicle'
  },
  {
    id: 4,
    title: 'What type of vehicle requires a CDL or CLP if it is designed to carry 15 or more passengers?',
    options: {
      a: 'A school bus',
      b: 'A commercial bus',
      c: 'A taxi',
      d: 'A limousine'
    },
    answer: 'b',
    explanation: 'A commercial bus  designed to transport 15 or more passengers'
  },
  {
    id: 5,
    title: 'What is a CMV and why is a CDL required to operate one?',
    options: {
      a: 'A construction vehicle that requires a CDL because of its size',
      b: 'A commercial vehicle that requires a CDL because of its weight',
      c: 'A vehicle used for personal transportation that requires a CDL for safety reasons',
      d: 'A military vehicle that requires a CDL for logistical reasons'
    },
    answer: 'b',
    explanation: 'A CMV is a commercial motor vehicle that requires a CDL to operate due to its size, weight, or other characteristics that make it unsafe for non-CDL holders to operate.'
  },
  {
    id: 6,
    title: 'What is the GVWR threshold for a vehicle owned and controlled by a farmer to be exempt from the CDL requirement?',
    options: {
      a: '10,000 lbs',
      b: '20,000 lbs',
      c: '26,000 lbs',
      d: '50,000 lbs'
    },
    answer: 'c',
    explanation: 'CDL exemption for farmer-owned vehicles with GVWR >26,000 lbs used for transporting farm products/machinery within 150 miles of farm.'
  },
  {
    id: 7,
    title: 'What type of motorized construction equipment is exempt from the CDL requirement when operated at a construction site?',
    options: {
      a: 'Bulldozers and backhoes',
      b: 'Dump trucks and cement mixers',
      c: 'Compactors and tractors',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'CDL not required for off-road motorized construction equipment (e.g., scrapers, graders, tractors) at construction sites not accessible to the public or when operated briefly at low speeds on public roads for non-transportation purposes'
  },
  {
    id: 8,
    title: 'What is the purpose of a commercial vehicle inspection?',
    options: {
      a: 'To ensure that the vehicle is in compliance with federal regulations',
      b: 'To make sure that the vehicle looks good',
      c: 'To identify areas where the vehicle can be improved',
      d: 'To check the vehicle for leaks'
    },
    answer: 'a',
    explanation: 'The purpose of a commercial vehicle inspection is to ensure that the vehicle is in compliance with federal regulations. Inspections are required by law and cover a variety of components, such as brakes, lights, tires, and other safety features.'
  },

  {
    id: 9,
    title: 'What is the consequence of being disqualified to drive a commercial motor vehicle?',
    options: {
      a: 'You will be fined',
      b: 'You will lose your CDL',
      c: 'You will be required to take a safety course',
      d: 'You will be given a warning'
    },
    answer: 'b',
    explanation: 'You may not drive a commercial motor vehicle if you are disqualified for any reason.'
  },
  {
    id: 10,
    title: 'What is the legal blood alcohol concentration limit for operating a CMV?',
    options: {
      a: '.08%',
      b: '.06%',
      c: '.04%',
      d: '.02%'
    },
    answer: 'c',
    explanation: 'It is illegal to operate a CMV if your blood alcohol concentration (BAC) is .04% or more.'
  },
  {
    id: 11,
    title: 'What is the penalty for having a detectable amount of alcohol under .04% while operating a CMV?',
    options: {
      a: 'You will be given a warning',
      b: 'You will be fined',
      c: 'You will be put out-of-service for 24 hours',
      d: 'You will lose your CDL'
    },
    answer: 'c',
    explanation: 'You will be put out-of-service for 24 hours if you have any detectable amount of alcohol under .04%.'
  },
  {
    id: 12,
    title: 'What offenses will cause a driver to lose their CLP and/or CDL for at least one year for a first offense?',
    options: {
      a: 'Driving a CMV if your blood alcohol concentration is .06% or higher.',
      b: 'Driving any vehicle under the influence of drugs.',
      c: 'Refusing to undergo drug testing.',
      d: 'All of the above.'
    },
    answer: 'd',
    explanation: 'CLP/CDL revoked for minimum 1 year for 1st offenses: blood alcohol .04%+, DUI, drug test refusal, accident fleeing, vehicle felony, disqualified CMV operation, negligent operation causing fatality. All apply'
  },
  {
    id: 13,
    title: 'What is the consequence of using a CMV to commit a felony involving controlled substances?',
    options: {
      a: 'You will lose your CLP and/or CDL for at least one year',
      b: 'You will lose your CLP and/or CDL for at least three years',
      c: 'You will lose your CLP and/or CDL for life',
      d: 'You will be fined'
    },
    answer: 'c',
    explanation: 'A driver will lose their CLP and/or CDL for life if they use a CMV to commit a felony involving controlled substances.'
  },

  {
    id: 14,
    title: 'What are some serious traffic violations?',
    options: {
      a: 'Driving 10 mph over the speed limit',
      b: 'Making an improper turn',
      c: 'Using a handheld cell phone while driving',
      d: 'Stopping at a red light'
    },
    answer: 'c',
    explanation: 'Serious traffic violations: excessive speeding (15+ mph over limit), reckless driving, improper lane changes, tailgating, fatal accidents in a CMV, operating a CMV without a CLP/CDL, using the wrong class of CLP/CDL, handheld phone use/texting. '
  },
  {
    id: 15,
    title: 'What is the consequence of committing two serious traffic violations within a three-year period involving a CMV?',
    options: {
      a: 'You will lose your CLP and/or CDL for at least 30 days',
      b: 'You will lose your CLP and/or CDL for at least 60 days',
      c: 'You will lose your CLP and/or CDL for at least 90 days',
      d: 'You will lose your CLP and/or CDL for at least 120 days'
    },
    answer: 'b',
    explanation: 'If you have committed two serious traffic violations within a three-year period involving a CMV, you will lose your CLP and/or CDL for at least 60 days.'
  },
  {
    id: 16,
    title: 'What is the consequence of violating an out-of-service order for the first time?',
    options: {
      a: 'You will lose your CLP and/or CDL for at least 30 days',
      b: 'You will lose your CLP and/or CDL for at least 60 days',
      c: 'You will lose your CLP and/or CDL for at least 90 days',
      d: 'You will lose your CLP and/or CDL for at least 120 days'
    },
    answer: 'a',
    explanation: 'If you violate an out-of-service order for the first time, you will lose your CLP and/or CDL for at least 90 days.'
  },
  {
    id: 17,
    title: 'What is the consequence of committing two violations of out-of-service orders within a ten-year period?',
    options: {
      a: 'You will lose your CLP and/or CDL for at least one year',
      b: 'You will lose your CLP and/or CDL for at least three years',
      c: 'You will lose your CLP and/or CDL for at least five years',
      d: 'You will lose your CLP and/or CDL for life'
    },
    answer: 'b',
    explanation: 'If you commit two violations of out-of-service orders within a ten-year period, you will lose your CLP and/or CDL for at least one year.'
  },
  {
    id: 18,
    title: 'What is considered a serious traffic violation?',
    options: {
      a: 'Driving 5 mph over the posted speed limit',
      b: 'Improper lane changes',
      c: 'Not using a turn signal when turning at an intersection',
      d: 'Parking in a no-parking zone'
    },
    answer: 'b',
    explanation: 'Serious traffic violations include improper or erratic lane changes, which can be dangerous and increase the risk of accidents.'
  },
  {
    id: 19,
    title: 'What is the penalty for committing two serious traffic violations within a three-year period involving a CMV?',
    options: {
      a: 'Loss of CLP and/or CDL for at least 60 days',
      b: 'Loss of CLP and/or CDL for at least 90 days',
      c: 'Loss of CLP and/or CDL for at least 120 days',
      d: 'Loss of CLP and/or CDL for at least one year'
    },
    answer: 'a',
    explanation: 'If you commit two serious traffic violations within a three-year period involving a CMV, you will lose your CLP and/or CDL for at least 60 days.'
  },
  {
    id: 20,
    title: 'What are the six offenses at a railroad-highway grade crossing that can result in a violation?',
    options: {
      a: 'Exceeding the speed limit',
      b: 'Failing to come to a complete stop',
      c: 'Not having enough space to completely drive through the crossing without stopping',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Violations at railroad-highway grade crossings: not stopping, not checking for trains, inadequate space to cross without stopping, not obeying traffic control, and insufficient undercarriage clearance.'
  },
  {
    id: 21,
    title: 'What is the penalty for a third violation of a railroad-highway grade crossing violation within a three-year period?',
    options: {
      a: 'Loss of CLP and/or CDL for at least 60 days',
      b: 'Loss of CLP and/or CDL for at least 90 days',
      c: 'Loss of CLP and/or CDL for at least 120 days',
      d: 'Loss of CLP and/or CDL for at least one year'
    },
    answer: 'c',
    explanation: 'If you commit a third violation of a railroad-highway grade crossing violation within a three-year period, you will lose your CLP and/or CDL for at least one year.'
  },

  {
    id: 22,
    title: 'What is required to obtain a hazardous materials endorsement?',
    options: {
      a: 'Passing a driving test',
      b: 'Submitting fingerprints and passing a background check',
      c: 'Obtaining a special license plate',
      d: 'Taking a written exam'
    },
    answer: 'b',
    explanation: 'To obtain a hazardous materials endorsement, you are required to submit your fingerprints and pass a background check.'
  },
  {
    id: 23,
    title: 'What happens if you renounce your United States citizenship?',
    options: {
      a: 'You will be disqualified from obtaining a hazardous materials endorsement.',
      b: 'You will be required to take a written exam.',
      c: 'You will be subject to a driving test.',
      d: 'You will be given a temporary endorsement.'
    },
    answer: 'a',
    explanation: 'If you renounce your United States citizenship, you will be disqualified from obtaining a hazardous materials endorsement.'
  },
  {
    id: 24,
    title: 'What happens if you are wanted or under indictment for certain felonies?',
    options: {
      a: 'You will be required to take a driving test.',
      b: 'You will be given a temporary endorsement.',
      c: 'You will be denied or lose your hazardous materials endorsement.',
      d: 'You will be required to obtain a special license plate.'
    },
    answer: 'c',
    explanation: 'If you are wanted or under indictment for certain felonies, you will be denied or lose your hazardous materials endorsement.'
  },
  {
    id: 25,
    title: 'What is the result of lacking mental capacity or being involuntarily committed to a mental health facility?',
    options: {
      a: 'You will be required to obtain a special license plate.',
      b: 'You will be given a temporary endorsement.',
      c: 'You will be denied or lose your hazardous materials endorsement.',
      d: 'You will be subject to a driving test.'
    },
    answer: 'c',
    explanation: 'No hazardous materials endorsement if adjudicated lacking mental capacity or involuntarily committed to a mental health facility under 49 CFR 1572.109.'
  },

  {
    id: 25,
    title: 'What are the consequences of being convicted of certain types of moving violations in your personal vehicle?',
    options: {
      a: ' Losing commercial driving privileges ',
      b: 'Losing the ability to operate a personal vehicle ',
      c: 'Getting a ticket',
      d: 'No consequences'
    }
  },

  {
    id: 26,
    title: 'What are the consequences of certain moving violations on a CDL holder?',
    options: {
      a: 'The CDL holder will receive a warning',
      b: 'The CDL holder will have their commercial driving privileges revoked',
      c: 'The CDL holder will have to retake their CDL exam',
      d: 'The CDL holder will receive a fine'
    },
    answer: 'b',
    explanation: 'If a CDL holder has been convicted of certain types of moving violations in their personal vehicle, they will be disqualified from operating a commercial motor vehicle.'
  },
  {
    id: 27,
    title: "What happens if a CDL holder's privilege to operate their personal vehicle is revoked?",
    options: {
      a: 'They can still operate a commercial motor vehicle',
      b: 'They will lose their commercial driving privileges',
      c: 'They will have to take a defensive driving course',
      d: 'They will receive a warning'
    },
    answer: 'b',
    explanation: 'CDL revoked/suspended if personal vehicle operation privileges lost due to non-parking traffic control violations'
  },
  {
    id: 28,
    title: 'How long will a CDL holder lose their CLP and/or CDL if their personal vehicle privileges are revoked due to alcohol, controlled substance, or felony violations?',
    options: {
      a: '6 months',
      b: '1 year',
      c: '2 years',
      d: '5 years'
    },
    answer: 'b',
    explanation: "If a CDL holder's privilege to operate their personal vehicle is revoked, cancelled, or suspended due to alcohol, controlled substance, or felony violations, they will lose their CLP and/or CDL for 1 year."
  },
  {
    id: 29,
    title: 'What happens if a CDL holder is convicted of a second moving violation in their personal vehicle or CMV?',
    options: {
      a: 'They will receive a warning',
      b: 'They will have to retake their CDL exam',
      c: 'They will have to take a defensive driving course',
      d: 'They will lose their CDL'
    },
    answer: 'd',
    explanation: 'If a CDL holder is convicted of a second moving violation in their personal vehicle or commercial motor vehicle, they will lose their CDL.'
  },

  {
    id: 30,
    title: 'What is the most important reason for inspecting a vehicle?',
    options: {
      a: 'To ensure a comfortable ride',
      b: 'To comply with federal and state laws',
      c: 'To improve fuel efficiency',
      d: 'To ensure safety for yourself and other road users'
    },
    answer: 'd',
    explanation: 'Safety is the most important reason for inspecting a vehicle.'
  },

  {
    id: 31,
    title: 'What can happen if a driver fails to inspect their vehicle?',
    options: {
      a: 'They may receive a fine',
      b: 'They may experience a breakdown on the road',
      c: 'They may be denied insurance coverage',
      d: 'They may be required to take a driving test'
    },
    answer: 'b',
    explanation: 'Vehicle defect found during an inspection could save you problems later, including a breakdown on the road.'
  },

  {
    id: 32,
    title: 'What is a pre-trip inspection and why is it important?',
    options: {
      a: 'An inspection that must be done during a trip to ensure safety',
      b: 'An inspection that must be done after a trip to assess any damage',
      c: 'An inspection that must be done before a trip to find potential problems',
      d: 'An inspection that must be done while driving to monitor vehicle performance'
    },
    answer: 'c',
    explanation: 'Pre-trip inspection as one that is done before a trip to find problems that could cause a crash or breakdown.'
  },

  {
    id: 33,
    title: 'How can you ensure safety during a trip?',
    options: {
      a: 'By avoiding highways',
      b: 'By driving faster than the speed limit',
      c: 'By watching gauges for signs of trouble',
      d: 'By playing loud music'
    },
    answer: 'c',
    explanation: 'During a trip, you should watch gauges for signs of trouble, among other things.'
  },

  {
    id: 34,
    title: 'What are some critical items to check during a stop?',
    options: {
      a: 'Tires, wheels, and rims',
      b: 'Windshield wipers',
      c: 'Cup holders',
      d: 'Air fresheners'
    },
    answer: 'a',
    explanation: 'Tires, wheels, and rims as critical items to check during a stop, along with brakes, lights and reflectors, and other items.'
  },

  {
    id: 35,
    title: 'What is an after-trip inspection and report?',
    options: {
      a: 'An inspection that must be done during a trip to ensure safety',
      b: 'An inspection that must be done after a trip to assess any damage',
      c: 'An inspection that must be done before a trip to find potential problems',
      d: 'An inspection that must be done while driving to monitor vehicle performance'
    },
    answer: 'b',
    explanation: 'After-trip inspection as one that should be done at the end of the trip, day, or tour of duty on each vehicle you operated.'
  },

  {
    id: 36,
    title: 'When should you perform an after-trip inspection?',
    options: {
      a: 'At the beginning of the trip',
      b: 'During the trip',
      c: 'At the end of the trip',
      d: 'Only if you suspect a problem'
    },
    answer: 'c',
    explanation: 'After-trip inspection should be done at the end of the trip, day, or tour of duty on each vehicle you operated.'
  },

  {
    id: 37,
    title: 'What should you do if you find problems during an after-trip inspection?',
    options: {
      a: 'Ignore the problems and continue driving',
      b: 'Report the problems to the motor carrier',
      c: 'Attempt to fix the problems yourself',
      d: 'Wait until the next inspection to report the problems'
    },
    answer: 'b',
    explanation: 'Inspection report helps a motor carrier know when the vehicle needs repairs, so if you find problems during an after-trip inspection, you should report them to the motor carrier.'
  },

  {
    id: 38,
    title: 'What is the minimum tread depth required on front tires?',
    options: {
      a: ' 2/32 inch',
      b: '4/32 inch',
      c: '6/32 inch',
      d: '8/32 inch'
    },
    answer: 'b',
    explanation: 'You need at least 4/32-inch tread depth in every major groove on front tires.'
  },

  {
    id: 39,
    title: 'What should you look for when inspecting tires for damage?',
    options: {
      a: 'Too much or too little air pressure',
      b: ' Bad wear',
      c: ' Cuts or other damage',
      d: ' All of the above'
    },
    answer: 'd',
    explanation: 'Several potential tire problems to look for during an inspection, including too much or too little air pressure, bad wear, cuts or other damage, and more.'
  },
  {
    id: 40,
    title: 'What are some wheel and rim problems to look for during an inspection?',
    options: {
      a: 'Damaged rims',
      b: 'Rust around wheel nuts',
      c: ' Missing clamps, spacers, studs, or lugs',
      d: '  All of the above'
    },
    answer: 'd',
    explanation: 'Several potential wheel and rim problems to look for during an inspection, including damaged rims, rust around wheel nuts, missing clamps, spacers, studs, or lugs, and more.'
  },
  {
    id: 41,
    title: 'What are some problems with bad brake drums or shoes?',
    options: {
      a: 'Cracked drums',
      b: 'Shoes or pads with oil, grease, or brake fluid on them',
      c: ' Shoes worn dangerously thin, missing, or broken',
      d: '  All of the above'
    },
    answer: 'd',
    explanation: 'Bad brake drums or shoes may have cracked drums, oil/grease/brake fluid on shoes or pads, worn thin, missing, or broken shoes, and other issues.'
  },

  {
    id: 42,
    title: ' What are some potential defects in the steering system to look for during an inspection?',
    options: {
      a: 'Missing nuts, bolts, cotter keys, or other parts',
      b: 'Bent, loose, or broken parts, such as steering column, steering gear box, or tie rods',
      c: ' Power steering hoses, pumps, and fluid level',
      d: ' All of the above'
    },
    answer: 'd',
    explanation: 'Steering system defects to inspect for: missing nuts/bolts/cotter keys, bent/loose/broken parts, power steering hoses/pumps/fluid level, and more.'
  },

  {
    id: 43,
    title: ' What is the maximum steering wheel play allowed?',
    options: {
      a: '5 degrees',
      b: ' 10 degrees',
      c: ' 15 degrees',
      d: ' 20 degrees'
    },
    answer: 'b',
    explanation: 'Steering wheel play of more than 10 degrees (approximately 2 inches movement at the rim of a 20-inch steering wheel) can make it hard to steer.'
  },

  {
    id: 44,
    title: 'What are some problems with the exhaust system to look for during an inspection?',
    options: {
      a: 'Loose, broken, or missing exhaust pipes, mufflers, tailpipes, or vertical stacks',
      b: 'Loose, broken, or missing mounting brackets, clamps, bolts, or nuts',
      c: 'Exhaust system parts rubbing against fuel system parts, tires, or other moving parts of vehicle',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Exhaust system inspection checks for: loose/broken/missing pipes, mufflers, tailpipes, and stacks, loose/broken/missing mounting brackets/clamps/bolts/nuts, and parts rubbing against fuel system/tires/vehicle moving parts'
  },

  {
    id: 45,
    title: 'What should you do if you find a defect during an inspection?',
    options: {
      a: 'Ignore the defect and keep driving',
      b: 'Report the defect to your supervisor or mechanic',
      c: 'Attempt to fix the defect yourself',
      d: 'Wait until the next inspection to report the defect'
    },
    answer: 'b',
    explanation: 'If any of the following conditions exist, the vehicle will be placed "out of service" and must be repaired, so it\'s important to report any defects found during an inspection to your supervisor or mechanic.'
  },

  {
    id: 46,
    title: 'What is the minimum tread depth required on front tires?',
    options: {
      a: '1/16 inch',
      b: '1/8 inch',
      c: '1/4 inch',
      d: '1/2 inch'
    },
    answer: 'b',
    explanation: 'You need at least 1/8 inch tread depth on front tires.'
  },

  {
    id: 47,
    title: 'What is the most important reason for inspecting your vehicle?',
    options: {
      a: 'To avoid getting a ticket',
      b: 'To avoid a breakdown on the road',
      c: 'To save money on repairs',
      d: 'To impress other drivers'
    },
    answer: 'b',
    explanation: 'Vehicle inspection is crucial for safety, protecting yourself and other road users. Finding defects prevents future problems, such as breakdowns costing time/money or crashes caused by defects.'
  },

  {
    id: 48,
    title: 'What are some potential problems with dual tires?',
    options: {
      a: 'Tires that come in contact with each other or parts of the vehicle',
      b: 'Mismatched sizes',
      c: 'Radial and bias-ply tires used together',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Several potential problems with dual tires, including tires that come in contact with each other or parts of the vehicle, mismatched sizes, and radial and bias-ply tires used together.'
  },

  {
    id: 49,
    title: 'What is the maximum allowable distance between dual tires?',
    options: {
      a: '1 inch',
      b: '2 inches',
      c: '3 inches',
      d: '4 inches'
    },
    answer: 'a',
    explanation: 'There should be no more than 1 inch of space between dual tires.'
  },

  {
    id: 50,
    title: 'What are some potential problems with wheel and rim problems to look for during an inspection?',
    options: {
      a: 'Damaged rims',
      b: 'Rust around wheel nuts',
      c: 'Missing clamps, spacers, studs, or lugs',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Several potential problems with wheel and rim problems to look for during an inspection, including damaged rims, rust around wheel nuts, missing clamps, spacers, studs, or lugs, and more.'
  },

  {
    id: 51,
    title: 'What are some potential defects in the steering system to look for during an inspection?',
    options: {
      a: 'Missing nuts, bolts, cotter keys, or other parts',
      b: 'Bent, loose, or broken parts, such as steering column, steering gear box, or tie rods',
      c: 'Power steering hoses, pumps, and fluid level',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Steering system defects to inspect: missing nuts/bolts/cotter keys, bent/loose/broken parts, power steering hoses/pumps/fluid level, and more.'
  },
  {
    id: 52,
    title: 'What are some potential defects in the suspension system to look for during an inspection?',
    options: {
      a: 'Spring hangers that allow movement of axle from proper position',
      b: 'Cracked or broken spring hangers',
      c: 'Missing or broken leaves in any leaf spring',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Suspension system defects to inspect: movement of axle from proper position due to spring hangers, cracked/broken spring hangers, missing/broken leaves in any leaf spring, and more.'
  },
  {
    id: 53,
    title: 'What should you do if you find a defect during an inspection?',
    options: {
      a: 'Ignore the defect and keep driving',
      b: 'Report the defect to your supervisor or mechanic',
      c: 'Attempt to fix the defect yourself',
      d: 'Wait until the next inspection to report the defect'
    },
    answer: 'b',
    explanation: 'If any of the following conditions exist, the vehicle will be placed "out of service" and must be repaired, so it\'s important to report any defects found during an inspection to your supervisor or mechanic.'
  },
  {
    id: 1,
    title: 'What is the purpose of the CDL pre-trip vehicle inspection test?',
    options: {
      a: 'To test your driving skills',
      b: 'To test your knowledge of traffic rules',
      c: 'To test if you know whether your vehicle is safe to drive',
      d: 'To test your knowledge of vehicle maintenance'
    },
    answer: 'c',
    explanation: 'The CDL pre-trip vehicle inspection test is designed to test if you know whether your vehicle is safe to drive. During the test, you will be asked to do a pre-trip inspection of your vehicle and explain to the examiner what you would inspect and why.'
  },
  {
    id: 53,
    title: 'What will you be tested on during the CDL pre-trip vehicle inspection test?',
    options: {
      a: 'Whether your vehicle is safe to drive',
      b: 'Your ability to operate the vehicle',
      c: 'Your knowledge of traffic laws',
      d: 'Your physical fitness'
    },
    answer: 'a',
    explanation: 'During the CDL pre-trip vehicle inspection test, you will be tested on whether your vehicle is safe to drive. You will be asked to perform a pre-trip inspection and explain to the examiner what you would inspect and why.'
  },
  {
    id: 53,
    title: 'What is the recommended method for doing a pre-trip inspection?',
    options: {
      a: 'Randomly inspect different parts of the vehicle each time',
      b: 'Inspect the vehicle in any order that feels comfortable',
      c: 'Inspect the vehicle the same way each time',
      d: 'Only inspect parts of the vehicle that you think are important'
    },
    answer: 'c',
    explanation: 'Doing a pre-trip inspection the same way each time so that you learn all the steps and are less likely to forget something.'
  },
  {
    id: 54,
    title: 'What should you check when approaching the vehicle during a pre-trip inspection?',
    options: {
      a: 'General condition of the vehicle',
      b: 'Damage or vehicle leaning to one side',
      c: 'Fresh oil, coolant, grease, or fuel leaks under the vehicle',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Pre-trip inspection involves checking for: vehicle condition/damage/leaning, fresh leaks (oil/coolant/grease/fuel), and hazards around the vehicle'
  },
  {
    id: 55,
    title: 'What is the purpose of reviewing the last vehicle inspection report during a pre-trip inspection?',
    options: {
      a: 'To check if any repairs were made since the last inspection',
      b: 'To ensure that all defects noted in the last inspection report have been repaired',
      c: 'To check that the driver signed the last inspection report',
      d: 'All of the above'
    },
    answer: 'b',
    explanation: 'Review last inspection report during pre-trip inspection to verify defect repairs. Motor carrier must fix safety-related items and certify repairs or not needed. Driver signs only if defects were noted and certified as repaired or not needing repair.'
  },
  {
    id: 56,
    title: 'What should you check in the engine compartment during a pre-trip inspection?',
    options: {
      a: 'Engine oil level',
      b: 'Coolant level in radiator and condition of hoses',
      c: 'Power steering fluid level and hose condition (if so equipped)',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'During pre-trip engine check, inspect fluid levels (oil/coolant/power steering/transmission), belts for wear, leaks (fuel/coolant/oil/power steering/hydraulic/battery), and wiring for cracks/wear.'
  },
  {
    id: 7,
    title: 'What is the importance of approaching the vehicle during the pre-trip inspection?',
    options: {
      a: 'To check the area around the vehicle for hazards to vehicle movement',
      b: 'To review the last vehicle inspection report',
      c: 'To start the engine and inspect inside the cab',
      d: 'To check the engine compartment'
    },
    answer: 'a',
    explanation: 'Approaching the vehicle during the pre-trip inspection is important to check the area around the vehicle for hazards to vehicle movement, such as people, other vehicles, objects, low-hanging wires, limbs, etc.'
  },
  {
    id: 8,
    title: 'What is the purpose of reviewing the last vehicle inspection report during the pre-trip inspection?',
    options: {
      a: 'To check for leaks in the engine compartment',
      b: 'To certify on the report that repairs were made or were unnecessary',
      c: 'To review the condition of the tires',
      d: 'To check the brakes'
    },
    answer: 'b',
    explanation: 'Check last inspection report during pre-trip to verify repairs made.'
  },
  {
    id: 9,
    title: 'What should be checked in the engine compartment during the pre-trip inspection?',
    options: {
      a: 'Windshield washer fluid level',
      b: 'Leak in the engine compartment',
      c: 'Battery fluid level, connections, and tie downs',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Pre-trip engine check: inspect fluid levels, belts, and leaks in the engine compartment.'
  },
  {
    id: 10,
    title: 'Why should you do a pre-trip inspection the same way each time?',
    options: {
      a: 'To save time during the inspection',
      b: "To ensure you don't miss any steps",
      c: 'To show off your knowledge to the examiner',
      d: 'To skip unnecessary steps'
    },
    answer: 'b',
    explanation: 'Doing a pre-trip inspection the same way each time will help ensure you learn all the steps and are less likely to forget something.'
  },
  {
    id: 11,
    title: 'What should you look for when approaching the vehicle during a pre-trip inspection?',
    options: {
      a: 'Damage or vehicle leaning to one side',
      b: 'Fresh oil, coolant, grease, or fuel leaks',
      c: 'Hazards to vehicle movement around the vehicle',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'When approaching the vehicle during a pre-trip inspection, you should look for damage or vehicle leaning to one side, fresh oil, coolant, grease, or fuel leaks, and hazards to vehicle movement around the vehicle.'
  },
  {
    id: 12,
    title: 'What should you do with the last vehicle inspection report during a pre-trip inspection?',
    options: {
      a: 'Ignore it and proceed with the inspection',
      b: 'Make a new report',
      c: 'Review it and check for items that affect safety',
      d: 'Give it to the examiner'
    },
    answer: 'c',
    explanation: 'Pre-trip: Verify last inspection report for safety items repaired. Motor carrier must certify on the report that repairs were made or unnecessary for safety-related items'
  },
  {
    id: 13,
    title: 'What should you do to ensure you don’t forget any steps during a pre-trip inspection?',
    options: {
      a: 'Approach the vehicle from the rear each time',
      b: 'Perform the inspection in a different order each time',
      c: 'Perform the inspection the same way each time',
      d: 'Only inspect the parts of the vehicle that you think are most important'
    },
    answer: 'c',
    explanation: 'Performing the inspection the same way each time will help you remember all the steps and be less likely to forget something.'
  },
  {
    id: 14,
    title: 'What should you look for when approaching the vehicle during a pre-trip inspection?',
    options: {
      a: 'Hazards to vehicle movement, such as other vehicles, people, and objects',
      b: 'Missing bolts or other small parts',
      c: 'Fluid leaks underneath the vehicle',
      d: 'Mismatched tire sizes'
    },
    answer: 'a',
    explanation: 'When approaching the vehicle, you should check the area around the vehicle for hazards to vehicle movement, such as other vehicles, people, and objects.'
  },
  {
    id: 15,
    title: 'What should you do if your vehicle has defects that affect safety?',
    options: {
      a: 'Ignore the defects and keep driving',
      b: 'Have the defects repaired as soon as possible',
      c: 'Report the defects to your supervisor or mechanic, but don’t worry about getting them fixed',
      d: 'Wait until the next inspection to report the defects'
    },
    answer: 'b',
    explanation: 'Repair safety defects ASAP. Motor carrier must fix safety-related items and certify repairs or not needed on the inspection report.'
  },
  {
    id: 16,
    title: 'What is the purpose of doing a pre-trip inspection the same way each time?',
    options: {
      a: 'To make the inspection quicker',
      b: 'To learn all the steps and be less likely to forget something',
      c: 'To avoid having to do the inspection at all',
      d: 'To make sure the vehicle is always in the same spot during the inspection'
    },
    answer: 'b',
    explanation: 'Doing a pre-trip inspection the same way each time is important so that you learn all the steps and are less likely to forget something.'
  },
  {
    id: 17,
    title: 'What should you check for around the vehicle during the pre-trip inspection?',
    options: {
      a: 'Hazards to vehicle movement such as people or other vehicles',
      b: 'Low-hanging wires or limbs',
      c: 'Objects',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'You should check the area around the vehicle for hazards to vehicle movement such as people, other vehicles, objects, low-hanging wires, limbs, and more.'
  },
  {
    id: 18,
    title: 'What should you do if a vehicle inspection report notes defects?',
    options: {
      a: 'Sign the report immediately',
      b: 'Ignore the defects and continue driving',
      c: 'The motor carrier must repair any items in the report that affect safety',
      d: 'None of the above'
    },
    answer: 'c',
    explanation: 'Reported safety defects require motor carrier repair and certification on the inspection report.'
  },
  {
    id: 73,
    title: 'What should you check for in the engine compartment during a pre-trip inspection?',
    options: {
      a: 'Engine oil level',
      b: 'Coolant level in radiator',
      c: 'Power steering fluid level and hose condition',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Pre-trip engine check: inspect oil/coolant/power steering fluids and hoses for good condition to prevent breakdowns or issues while on the road.'
  },
  {
    id: 74,
    title: 'What should you check in the cab of the vehicle during a pre-trip inspection?',
    options: {
      a: 'Parking brake',
      b: 'Gearshift',
      c: 'Anti-Lock Braking System (ABS) indicator lights',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Pre-trip cab check: ensure parking brake, gearshift, and ABS indicator lights work to prevent accidents/issues on the road.'
  },
  {
    id: 75,
    title: 'What should you do if you find defects during a pre-trip inspection?',
    options: {
      a: 'Ignore the defects and keep driving',
      b: 'Report the defects to your supervisor or mechanic',
      c: 'Attempt to fix the defects yourself',
      d: 'Wait until the next inspection to report the defects'
    },
    answer: 'b',
    explanation: 'Report defects found during pre-trip inspection to supervisor or mechanic. Address issues ASAP for safety and to prevent breakdowns or accidents while driving. Ignoring or fixing defects yourself could cause serious problems.'
  },
  {
    id: 76,
    title: 'What should you do if you find a hazard to vehicle movement during the inspection?',
    options: {
      a: 'Ignore it and continue with the inspection',
      b: 'Report it to your supervisor or mechanic',
      c: 'Attempt to move the hazard yourself',
      d: 'Wait until the next inspection to report the hazard'
    },
    answer: 'b',
    explanation: 'During the inspection, you should check the area around the vehicle for hazards to vehicle movement and report them to your supervisor or mechanic.'
  },
  {
    id: 77,
    title: 'What should you check for during the pre-trip inspection of air pressure?',
    options: {
      a: '50-90 psi',
      b: '120-140 psi',
      c: '100-110 psi',
      d: '80-100 psi'
    },
    answer: 'a',
    explanation: 'The air pressure should build from 50 to 90 psi within 3 minutes during the pre-trip inspection.'
  },
  {
    id: 78,
    title: 'What should you look for in the coolant temperature during the pre-trip inspection?',
    options: {
      a: 'The temperature should begin a gradual rise to normal operating range.',
      b: 'The temperature should remain below normal operating range.',
      c: 'The temperature should immediately reach normal operating range.',
      d: 'The temperature is not relevant during the pre-trip inspection.'
    },
    answer: 'a',
    explanation: 'During the pre-trip inspection, you should look for the coolant temperature to begin a gradual rise to normal operating range.'
  },
  {
    id: 79,
    title: 'What warning lights and buzzers should you be aware of during the pre-trip inspection?',
    options: {
      a: 'Oil, water, charging system, and antilock brake system (ABS)',
      b: 'Seatbelt warning light and the turn signal indicators',
      c: 'Headlights and taillights',
      d: 'Windshield wipers and defroster'
    },
    answer: 'a',
    explanation: 'During the pre-trip inspection, you should be aware of warning lights and buzzers for oil, water, charging system, and antilock brake system (ABS).'
  },
  {
    id: 80,
    title: 'What is the purpose of the walk around inspection?',
    options: {
      a: 'To check the condition of the vehicle',
      b: 'To clean the lights and reflectors',
      c: 'To inspect the cargo securement',
      d: 'To test the brakes'
    },
    answer: 'a',
    explanation: 'The purpose of the walk around inspection is to check the condition of the vehicle, including the tires, lights, brakes, and other essential parts, to ensure that it is safe to operate on the road.'
  },

  {
    id: 81,
    title: 'How should you clean lights, reflectors, and glass during the inspection?',
    options: {
      a: 'With soap and water',
      b: 'With a dry cloth',
      c: 'With a wet cloth',
      d: 'As you go along'
    },
    answer: 'd',
    explanation: "Clean lights, reflectors, and glass during the inspection using a dry cloth or appropriate tool to ensure they're free from dirt and obstructions that could impair visibility or affect the vehicle's safety"
  },

  {
    id: 82,
    title: "What should be inspected on the driver's door glass?",
    options: {
      a: 'The condition of the door handle',
      b: 'The condition of the window motor',
      c: 'The condition of the door lock',
      d: 'Whether it is clean and free from obstructions'
    },
    answer: 'd',
    explanation: "When inspecting, check driver's door glass for obstructions and ensure proper function of door latches or locks. Check glass for cracks or damage to ensure safety."
  },
  {
    id: 83,
    title: 'What should be inspected on the door latches or locks?',
    options: {
      a: 'Proper function',
      b: 'Corrosion',
      c: 'Looseness',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'The door latches or locks should be inspected for proper function, corrosion, looseness, or any signs of damage that may affect the security and operability of the door.'
  },

  {
    id: 84,
    title: 'What should be inspected on the left front wheel?',
    options: {
      a: 'Condition of wheel and rim',
      b: 'Condition of lug nuts and clamps',
      c: 'Condition of tires',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'During a pre-trip inspection, inspect the left front wheel for signs of damage, misalignment, or worn-out parts, including the wheel and rim, lug nuts and clamps, and the condition of the tires.'
  },

  {
    id: 85,
    title: 'What should be inspected on the left front suspension?',
    options: {
      a: 'Condition of spring, spring hangers, shackles, u-bolts',
      b: 'Shock absorber condition',
      c: 'All of the above',
      d: 'None of the above'
    },
    answer: 'c',
    explanation: 'The left front suspension should be inspected for the condition of spring, spring hangers, shackles, u-bolts, and shock absorber condition.'
  },
  {
    id: 86,
    title: 'What should be inspected on the left front brake?',
    options: {
      a: 'Condition of brake drum or disc',
      b: 'Condition of hoses',
      c: 'Brake lining thickness',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'During the pre-trip inspection, the condition of the left front brake should be checked. This includes inspecting the condition of the brake drum or disc, hoses, and brake lining thickness.'
  },

  {
    id: 87,
    title: 'What should be inspected on the front axle?',
    options: {
      a: 'Condition of front wheels',
      b: 'Condition of rear wheels',
      c: 'Condition of the brakes',
      d: 'All of the above'
    },
    answer: 'a',
    explanation: 'During pre-trip inspection, check front axle. Inspect front wheels for missing, bent or broken studs, clamps or lugs or misalignment.'
  },

  {
    id: 88,
    title: 'What should be inspected on the steering system?',
    options: {
      a: 'Loose, worn, bent, damaged or missing parts',
      b: 'Condition of the power steering pump',
      c: 'Condition of the brakes',
      d: 'All of the above'
    },
    answer: 'a',
    explanation: 'During the pre-trip inspection, the steering system should be checked for any loose, worn, bent, damaged or missing parts. The steering mechanism should be grabbed to test for looseness.'
  },

  {
    id: 89,
    title: 'How should you test the steering mechanism for looseness?',
    options: {
      a: 'Turn the steering wheel',
      b: 'Grab the steering mechanism and test for looseness',
      c: 'Inspect the condition of the power steering pump',
      d: 'Check the steering fluid level'
    },
    answer: 'b',
    explanation: 'To test for looseness in the steering mechanism during the pre-trip inspection, the mechanism should be grabbed and tested.'
  },
  {
    id: 90,
    title: 'What should be inspected on the windshield?',
    options: {
      a: 'Whether the windshield is dirty or not',
      b: 'Any damage on the windshield',
      c: 'Both A and B',
      d: 'Neither A nor B'
    },
    answer: 'c',
    explanation: 'During the inspection, the windshield should be checked for any damage and cleaned if dirty.'
  },

  {
    id: 91,
    title: 'How should you check the windshield wiper arms?',
    options: {
      a: 'Test for looseness by shaking the wiper arms',
      b: 'Test for looseness by grabbing the wiper arms and moving them up and down',
      c: 'Test for looseness by pushing the wiper arms back and forth',
      d: 'Test for looseness by pulling the wiper blades off the arms'
    },
    answer: 'b',
    explanation: 'To test the windshield wiper arms for looseness, grab them and move them up and down.'
  },

  {
    id: 92,
    title: 'What should be inspected on the parking, clearance, and identification lights?',
    options: {
      a: 'The cleanliness of the lights',
      b: 'The proper color of the lights',
      c: 'The functionality of the lights',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'During the inspection, the parking, clearance, and identification lights should be checked for cleanliness, proper color, and functionality.'
  },

  {
    id: 93,
    title: 'What should be inspected on the reflectors?',
    options: {
      a: 'The cleanliness of the reflectors',
      b: 'The proper color of the reflectors',
      c: 'The functionality of the reflectors',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'During the inspection, the reflectors should be checked for cleanliness, proper color, and functionality.'
  },

  {
    id: 94,
    title: 'What is the purpose of the walk around inspection?',
    options: {
      a: 'To check for potential defects in the vehicle',
      b: 'To clean the vehicle',
      c: 'To fuel the vehicle',
      d: "To check the vehicle's mileage"
    },
    answer: 'a',
    explanation: 'The purpose of the walk around inspection is to check for potential defects in the vehicle.'
  },
  {
    id: 95,
    title: 'How should you clean lights, reflectors, and glass during the inspection?',
    options: {
      a: 'With a dry cloth',
      b: 'With water only',
      c: 'With soap and water',
      d: 'With a cleaning solution designed for vehicle surfaces'
    },
    answer: 'd',
    explanation: 'Lights, reflectors, and glass should be cleaned with a cleaning solution designed for vehicle surfaces during the inspection.'
  },
  {
    id: 96,
    title: "What should be inspected on the driver's door glass?",
    options: {
      a: 'Its color',
      b: 'Its shape',
      c: 'Its cleanliness',
      d: 'Its latches or locks'
    },
    answer: 'd',
    explanation: "During the inspection, the driver's door glass latches or locks should be inspected to ensure they work properly."
  },
  {
    id: 97,
    title: 'What should be inspected on the door latches or locks?',
    options: {
      a: 'Their color',
      b: 'Their shape',
      c: 'Their cleanliness',
      d: 'Their functionality'
    },
    answer: 'd',
    explanation: 'During the inspection, the door latches or locks should be inspected to ensure they work properly.'
  },
  {
    id: 98,
    title: 'What should be inspected on the left front wheel?',
    options: {
      a: 'Its color',
      b: 'Its shape',
      c: 'Its cleanliness',
      d: 'Its condition'
    },
    answer: 'd',
    explanation: "During the inspection, the left front wheel's condition should be inspected, including whether there are any missing, bent, or broken studs, clamps, or lugs, or any signs of misalignment."
  },
  {
    id: 99,
    title: 'What should be inspected on the left front suspension?',
    options: {
      a: 'Its color',
      b: 'Its shape',
      c: 'Its cleanliness',
      d: 'Its condition'
    },
    answer: 'd',
    explanation: 'During the inspection, the left front suspension should be inspected, including the condition of the spring, spring hangers, shackles, u-bolts, and shock absorber.'
  },
  {
    id: 100,
    title: 'What should be inspected on the left front brake?',
    options: {
      a: 'Its color',
      b: 'Its shape',
      c: 'Its cleanliness',
      d: 'Its condition'
    },
    answer: 'd',
    explanation: 'During the inspection, the left front brake drum or disc and hoses should be inspected to ensure they are in good condition.'
  },

  {
    id: 101,
    title: 'What should be inspected on the rear of the engine?',
    options: {
      a: 'Fuel tank',
      b: 'Oil level',
      c: 'Leaks',
      d: 'All of the above'
    },
    answer: 'c',
    explanation: 'The rear of the engine should be inspected for leaks.'
  },

  {
    id: 102,
    title: 'What should be inspected on the transmission?',
    options: {
      a: 'Fluid level',
      b: 'Leaks',
      c: 'Gears',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'The transmission should be inspected for fluid level, leaks, and proper operation of gears.'
  },

  {
    id: 103,
    title: 'What should be inspected on the exhaust system?',
    options: {
      a: 'Security',
      b: 'Leaks',
      c: 'Distance from wires and fuel or air lines',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'The exhaust system should be inspected for security, leaks, and proper distance from wires and fuel or air lines.'
  },
  {
    id: 104,
    title: 'What should be inspected on the frame and cross members?',
    options: {
      a: 'Bends or cracks',
      b: 'Loose or missing parts',
      c: 'Damage to air lines and electrical wiring',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Check frame and cross members for bends, cracks, loose/missing parts, damage to air lines/electrical wiring. Address any issues before operating the vehicle during the inspection.'
  },

  {
    id: 105,
    title: 'How should air lines and electrical wiring be secured?',
    options: {
      a: 'Loosely',
      b: 'Tightly',
      c: 'Against snagging, rubbing, and wearing',
      d: 'None of the above'
    },
    answer: 'c',
    explanation: 'Air lines and electrical wiring should be securely fastened against snagging, rubbing, and wearing during the inspection. This helps to prevent damage and ensure safe operation of the vehicle.'
  },

  {
    id: 106,
    title: 'What should be inspected on the spare tire carrier or rack?',
    options: {
      a: 'Presence of spare tire',
      b: 'Proper mounting and attachment of spare tire and wheel',
      c: 'Adequacy of spare tire and wheel',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Inspect the spare tire carrier or rack for a properly mounted spare tire and wheel, and ensure the spare is adequate. Address any issues found before operating the vehicle'
  },
  {
    id: 107,
    title: 'How should the spare tire and wheel be mounted in the rack?',
    options: {
      a: 'Loosely',
      b: 'Tightly',
      c: 'It does not matter',
      d: 'None of the above'
    },
    answer: 'b',
    explanation: 'The spare tire and wheel should be securely mounted in the rack to prevent them from coming loose while driving.'
  },
  {
    id: 108,
    title: 'What should be inspected on the cargo securement for trucks?',
    options: {
      a: 'Header board',
      b: 'Side boards and stakes',
      c: 'Canvas or tarp',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Cargo securement for trucks should be inspected for the header board, side boards and stakes, canvas or tarp, and any other cargo blocking, bracing, or tie-down devices.'
  },
  {
    id: 109,
    title: 'How should the cargo be blocked, braced, tied, or chained?',
    options: {
      a: 'Loosely',
      b: 'Tightly',
      c: 'It does not matter',
      d: 'None of the above'
    },
    answer: 'b',
    explanation: 'The cargo should be properly blocked, braced, tied, or chained to prevent it from shifting, falling, or rolling during transportation.'
  },
  {
    id: 110,
    title: 'What should be inspected on the header board?',
    options: {
      a: 'Proper installation and secure attachment',
      b: 'No damage or rotting',
      c: 'Adequate strength to restrain cargo',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'The header board should be inspected for proper installation and secure attachment, no damage or rotting, and adequate strength to restrain cargo.'
  },
  {
    id: 111,
    title: 'What should be inspected on the side boards and stakes?',
    options: {
      a: 'No damage or rotting',
      b: 'Adequate height to contain cargo',
      c: 'Properly secured in place',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'The side boards and stakes should be inspected for no damage or rotting, adequate height to contain cargo, and properly secured in place.'
  },
  {
    id: 112,
    title: 'How should the canvas or tarp be properly secured to prevent tearing, billowing, or blocking of mirrors?',
    options: {
      a: 'Tightly tied to the cargo',
      b: 'Secured with bungee cords or straps',
      c: 'Properly folded and tucked',
      d: 'All of the above'
    },
    answer: 'b',
    explanation: 'The canvas or tarp should be properly secured with bungee cords or straps to prevent tearing, billowing, or blocking of mirrors.'
  },

  {
    id: 113,
    title: 'Why is it important to turn off all lights before performing a pre-trip inspection?',
    options: {
      a: 'To avoid draining the battery',
      b: 'To ensure all lights are working properly',
      c: 'To prevent any potential electrical hazards',
      d: 'To save fuel'
    },
    answer: 'b',
    explanation: 'Turning off all lights before performing a pre-trip inspection ensures that you can accurately check that all lights are working properly and any defects can be detected.'
  },

  {
    id: 114,
    title: 'What are the steps to check the left turn signal lights during the pre-trip inspection?',
    options: {
      a: 'Turn on the left turn signal lights and check if they are clean and operating properly',
      b: 'Turn on the right turn signal lights and check if they are clean and operating properly',
      c: 'Turn on the hazard lights and check if they are clean and operating properly',
      d: 'Turn on the brake lights and check if they are clean and operating properly'
    },
    answer: 'a',
    explanation: 'To check the left turn signal lights during the pre-trip inspection, turn on the left turn signal lights and check if they are clean and operating properly.'
  },

  {
    id: 115,
    title: 'What are the required papers and documents that should be checked before driving?',
    options: {
      a: "Driver's license and vehicle registration",
      b: 'Trip manifests and permits',
      c: 'Insurance and registration',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Before driving, it is important to check for all required papers, trip manifests, permits, insurance, and registration.'
  },

  {
    id: 115,
    title: 'Why is it important to secure loose articles in the cab before driving?',
    options: {
      a: 'They might interfere with operation of the controls',
      b: 'They might hit you in a crash',
      c: 'Both a and b',
      d: 'None of the above'
    },
    answer: 'c',
    explanation: 'Loose articles in the cab might interfere with the operation of the controls, and they might hit you in a crash. Therefore, it is important to secure them before driving.'
  },

  {
    id: 116,
    title: 'What is the procedure to test for hydraulic leaks in a vehicle with hydraulic brakes?',
    options: {
      a: 'Pump the brake pedal three times, then apply firm pressure to the pedal and hold for five seconds. The pedal should not move.',
      b: 'Check the air pressure gauge and temperature gauges.',
      c: 'Gently pull forward against the parking brake to make sure it holds.',
      d: 'Push the brake pedal firmly while going about five miles per hour.'
    },
    answer: 'a',
    explanation: 'To test for hydraulic leaks in a vehicle with hydraulic brakes, pump the brake pedal three times, then apply firm pressure to the pedal and hold for five seconds. The pedal should not move. If it does, there may be a leak or other problem.'
  },

  {
    id: 117,
    title: 'How should you test the parking brake during the pre-trip inspection?',
    options: {
      a: 'Fasten the safety belt, set the parking brake, and release the trailer parking brake (if applicable).',
      b: 'Apply firm pressure to the brake pedal and hold for five seconds.',
      c: 'Gently pull forward against the parking brake to make sure it holds.',
      d: 'Push the brake pedal firmly while going about five miles per hour.'
    },
    answer: 'c',
    explanation: "To test the parking brake, gently pull forward during the pre-trip inspection. Repeat for the trailer with the parking brake set. If it doesn't hold, the vehicle needs to be fixed."
  },
  {
    id: 118,
    title: 'What precautions should you take to avoid rolling back when starting a manual transmission vehicle?',
    options: {
      a: 'Fully engage the clutch before taking your foot off the brake',
      b: 'Partly engage the clutch before taking your foot off the brake',
      c: 'Use the parking brake to keep from rolling back',
      d: 'All of the above'
    },
    answer: 'b',
    explanation: 'Partly engaging the clutch before taking your foot off the brake as a way to avoid rolling back when starting a manual transmission vehicle.'
  },

  {
    id: 119,
    title: 'How can rough acceleration be harmful to a vehicle, and what steps can you take to prevent it?',
    options: {
      a: 'Rough acceleration can cause mechanical damage to the vehicle',
      b: 'To prevent rough acceleration, speed up smoothly and gradually',
      c: 'To prevent rough acceleration when pulling a trailer, accelerate very gradually',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Rough acceleration can cause mechanical damage to a vehicle, and suggests speeding up smoothly and gradually as well as accelerating very gradually when pulling a trailer to prevent rough acceleration.'
  },

  {
    id: 120,
    title: 'In what situations should you be especially cautious about accelerating too quickly, and why?',
    options: {
      a: 'When starting a manual transmission vehicle',
      b: 'When driving in rain or snow',
      c: 'When driving on slippery or loose surfaces',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Drive manual transmission vehicles carefully when starting, driving in rain, snow, or on slippery surfaces. Excessive power can cause the drive wheels to spin and result in loss of control.'
  },

  {
    id: 121,
    title: 'How should you hold the steering wheel while driving, and why is this important?',
    options: {
      a: 'With one hand at the top of the wheel and one hand at the bottom of the wheel',
      b: 'With one hand near the center of the wheel and one hand near the top of the wheel',
      c: 'With both hands on opposite sides of the wheel',
      d: 'With both hands at the bottom of the wheel'
    },
    answer: 'c',
    explanation: 'o maintain control of the vehicle, hold the steering wheel firmly with both hands on opposite sides while driving, especially when hitting a curb or pothole'
  },

  {
    id: 122,
    title: 'What precautions should you take when stopping a vehicle, and what factors affect the amount of brake pressure you need to apply?',
    options: {
      a: 'Push the brake pedal down gradually to ensure a smooth, safe stop',
      b: 'The amount of brake pressure needed to stop the vehicle depends on the speed of the vehicle and how quickly you need to stop',
      c: 'Control the brake pressure to avoid skidding or losing control of the vehicle',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Gradually push down the brake pedal with controlled pressure for a smooth, safe stop. The required pressure depends on factors like vehicle speed and how quickly you need to stop'
  },

  {
    id: 123,
    title: 'If you have a manual transmission, what should you do when the engine is close to idle and you need to stop the vehicle?',
    options: {
      a: 'Shift into neutral and apply the brakes',
      b: 'Shift into reverse and apply the brakes',
      c: 'Shift into first gear and apply the clutch',
      d: 'Push the clutch in'
    },
    answer: 'd',
    explanation: 'To prevent stalling in a manual transmission vehicle, push the clutch in when the engine is close to idle and you need to stop. This disengages the engine from the wheels.'
  },
  {
    id: 124,
    title: 'Why is backing a vehicle always dangerous, and what should you do to avoid backing whenever possible?',
    options: {
      a: 'Backing a vehicle is dangerous because you cannot see everything behind the vehicle',
      b: 'You should avoid backing whenever possible by parking in a way that allows you to pull forward when leaving',
      c: 'You should use a helper whenever possible to guide you while backing',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Backing a vehicle is dangerous due to limited visibility. Avoid backing when possible by parking to pull forward, and use a helper to guide you while backing'
  },

  {
    id: 125,
    title: 'What are some simple safety rules to follow when you have to back a vehicle?',
    options: {
      a: 'Start in the proper position and look at your path',
      b: 'Use mirrors on both sides and back slowly',
      c: "Back and turn toward the driver's side whenever possible",
      d: 'All of the above'
    },
    answer: 'd',
    explanation: "Simple safety rules when backing a vehicle include starting in the proper position, looking at your path, using both side mirrors, backing slowly, and turning toward the driver's side whenever possible"
  },

  {
    id: 130,
    title: 'Why is it important to start in the proper position when backing a vehicle?',
    options: {
      a: 'Starting in the proper position can help you avoid backing into obstacles',
      b: 'Starting in the proper position can give you a better view of your path',
      c: 'Starting in the proper position can make it easier to control the vehicle while backing',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Proper starting position is important when backing a vehicle to avoid obstacles, get a better view of the path, and maintain control while backing.'
  },
  {
    id: 140,
    title: 'What are some ways to ensure you have a clear view of your path when backing a vehicle?',
    options: {
      a: 'Get out and check the area behind the vehicle',
      b: 'Use your mirrors to check your blind spots',
      c: 'Turn your head and look over your shoulder',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'To ensure a clear view of your path when backing, check behind the vehicle, use mirrors to check blind spots, and turn your head to look over your shoulder'
  },

  {
    id: 150,
    title: 'How can you use mirrors to help you back a vehicle safely?',
    options: {
      a: 'Mirrors can help you see what is behind the vehicle that may be out of sight',
      b: 'Mirrors can help you check your blind spots',
      c: 'Mirrors can help you see if there are any obstacles in your path',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Mirrors can help you back a vehicle safely by providing a view of what is behind the vehicle, checking blind spots, and detecting any obstacles in the path.'
  },

  {
    id: 160,
    title: 'Why is it important to back slowly when maneuvering a vehicle?',
    options: {
      a: 'Backing slowly allows you to react more quickly to any obstacles or hazards in your path',
      b: 'Backing slowly reduces the risk of skidding or losing control of the vehicle',
      c: 'Backing slowly reduces the risk of collisions or accidents',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'Slowly backing a vehicle is crucial to react quickly to obstacles, reduce skidding or losing control, and avoid collisions or accidents.'
  },

  {
    id: 170,
    title: 'When backing and turning, which direction should you turn whenever possible, and why?',
    options: {
      a: "You should turn toward the passenger side whenever possible, to avoid obstructing the driver's view",
      b: "You should turn toward the driver's side whenever possible, to keep the vehicle closer to the curb",
      c: 'You should turn away from the curb whenever possible, to avoid hitting it',
      d: 'It does not matter which direction you turn when backing and turning'
    },
    answer: 'b',
    explanation: "When backing and turning toward the driver's side whenever possible to reduce the risk of hitting obstacles or other vehicles and keep the vehicle closer to the curb"
  },

  {
    id: 180,
    title: 'What is double clutching, and why is it necessary to shift gears in most heavy vehicles with manual transmissions?',
    options: {
      a: 'A technique used to reduce wear on the tires',
      b: 'A technique used to reduce wear on the brakes',
      c: 'A technique used to reduce wear on the transmission',
      d: 'A technique used to reduce fuel consumption'
    },
    answer: 'c',
    explanation: 'Double clutching is a technique used to shift gears in most heavy vehicles with manual transmissions. It allows for smoother shifting and reduces wear on the transmission.'
  },

  {
    id: 190,
    title: "What are the two ways to determine when to shift gears, and which method is recommended in the driver's manual for your vehicle?",
    options: {
      a: "By engine speed (rpm) and road speed (mph); the driver's manual recommends using engine speed",
      b: "By engine speed (rpm) and road speed (mph); the driver's manual recommends using road speed",
      c: "By tire pressure and road surface; the driver's manual recommends using tire pressure",
      d: "By weather conditions and road surface; the driver's manual recommends using weather conditions"
    },
    answer: 'a',
    explanation: "The two ways to determine when to shift gears are by engine speed (rpm) and road speed (mph). The driver's manual may recommend a specific method, but generally, using engine speed is the recommended approach."
  },

  {
    id: 200,
    title: 'What should you do if you have difficulty putting the vehicle into the next gear after shifting into neutral? The higher gear?',
    options: {
      a: 'Try to force the gear into place',
      b: 'Release the clutch and shift back into the previous gear',
      c: 'Increase engine speed to match road speed, and try again',
      d: 'All of the above'
    },
    answer: 'c',
    explanation: 'If you have difficulty putting the vehicle into the next gear after shifting into neutral, return to neutral, release the clutch, increase engine speed to match road speed, and try again.'
  },
  {
    id: 201,
    title: '    Why is it important to secure cargo on flatbed trailers or trailers without sides?',
    options: {
      a: ' To prevent cargo from getting wet',
      b: 'To prevent cargo from getting dirty',
      c: 'To keep the cargo from shifting or falling off',
      d: 'To make the vehicle look neat'
    },
    answer: 'c',
    explanation: 'ecuring cargo on flatbed trailers is crucial to prevent shifting or falling off. Properly tiedowns and equipment ensure safe transport and prevent accidents or injuries on the road.'
  },
  {
    id: 202,
    title: 'Why is it important to secure cargo on flatbed trailers or trailers without sides?',
    options: {
      a: 'To prevent cargo from getting wet',
      b: 'To prevent cargo from getting dirty',
      c: 'To keep the cargo from shifting or falling off',
      d: 'To make the vehicle look neat'
    },
    answer: 'c',
    explanation: 'Securing cargo on flatbed trailers is crucial to prevent shifting or falling off. Properly tiedowns and equipment ensure safe transport and prevent accidents or injuries on the road.'
  },
  {
    id: 203,
    title: 'Are there special requirements for securing heavy pieces of metal?',
    options: {
      a: 'No, there are no special requirements',
      b: 'Yes, but they are not important',
      c: 'Yes, and it is important to find out what they are',
      d: 'Yes, but only if the metal is sharp'
    },
    answer: 'c',
    explanation: 'Special requirements exist for securing heavy pieces of metal, and it is crucial to find out what they are before transporting such loads to ensure proper safety and security.'
  },

  {
    id: 204,
    title: 'What are the two basic reasons for covering cargo?',
    options: {
      a: 'To protect people from spilled drinks',
      b: 'To protect the cargo from getting wet',
      c: 'To protect people from spilled cargo and protect the cargo from weather',
      d: 'To keep the cargo from getting dirty'
    },
    answer: 'c',
    explanation: 'Explanation: Covering cargo is important to protect both people and the cargo itself. It helps prevent spillage, which is a safety requirement in many states, and also protects the cargo from weather.'
  },

  {
    id: 205,
    title: 'Why is it important to check your cargo covers in the mirrors from time to time while driving?',
    options: {
      a: 'To check if the cargo is still there',
      b: 'To see if the covers are flapping in the wind',
      c: 'To make sure the covers look good',
      d: 'To see if the cargo is getting wet'
    },
    answer: 'b',
    explanation: "Explanation: Checking cargo covers in the mirrors is crucial to ensure they are not flapping in the wind. This can cause them to tear loose and uncover the cargo, obstructing the driver's or other motorists' view, posing a safety hazard."
  },
  {
    id: 206,
    title: 'Why do containerized loads need to be properly secured?',
    options: {
      a: 'To prevent them from getting wet',
      b: 'To prevent damage to the container',
      c: 'To ensure safety during transportation',
      d: 'To keep the cargo from getting dirty'
    },
    answer: 'c',
    explanation: 'Containerized loads must be secured properly to ensure safety during transportation, even if they have their own tiedown devices. Inspecting sealed loads may not be possible, but exceeding weight limits should be avoided.'
  },
  {
    id: 207,
    title: 'Why do dry bulk tanks require special care while driving?',
    options: {
      a: 'Because they have a low center of gravity',
      b: 'Because the load can shift easily',
      c: 'Because they are more stable than other tanks',
      d: 'Because they are less prone to rollover accidents'
    },
    answer: 'b',
    explanation: 'Dry bulk tanks require special care while driving because the load can shift easily due to their high center of gravity. It is important to be extremely cautious while going around curves and making sharp turns to prevent accidents and ensure safe transportation.'
  },
  {
    id: 208,
    title: 'Why is particular caution needed while transporting hanging meat in a refrigerated truck?',
    options: {
      a: 'Because it can spoil easily',
      b: 'Because it can get too cold',
      c: 'Because it can become too heavy',
      d: 'Because it can be a very unstable load with a high center of gravity'
    },
    answer: 'd',
    explanation: 'Hanging meat in a refrigerated truck is unstable with a high center of gravity. Extra care is needed on sharp curves. Going slowly prevents accidents and ensures safe transportation.'
  },
  {
    id: 209,
    title: 'Why is special care necessary while transporting livestock in a trailer?',
    options: {
      a: 'Because they can be noisy and disruptive',
      b: 'Because they can easily escape',
      c: 'Because they can lean on curves and shift the center of gravity',
      d: 'Because they require a lot of space'
    },
    answer: 'c',
    explanation: 'Special care is necessary while transporting livestock in a trailer as they can move, lean on curves, and shift the center of gravity, increasing the risk of rollover accidents. False bulkheads can help, but extra caution is required..'
  },
  {
    id: 210,
    title: 'What is required for over-length, over-width, and/or overweight loads?',
    options: {
      a: "A regular driver's license",
      b: 'Special transit permits',
      c: 'No permits are required',
      d: 'A CDL is required'
    },
    answer: 'b',
    explanation: 'Over-length, over-width, and/or overweight loads require special transit permits, limited driving times, and special equipment. A police escort or pilot vehicle may be required. Special care is necessary for safe transportation.'
  },
  {
    id: 211,
    title: 'What is the purpose of the bridge formula?',
    options: {
      a: 'To set maximum GVWs and GCWs',
      b: 'To permit less maximum axle weight for axles that are closer together',
      c: 'To prevent overloading of cargo',
      d: 'To ensure safe transportation of goods'
    },
    answer: 'b',
    explanation: 'Bridge formula limits axle weight for safety. States enforce maximum GVWs, GCWs, and axle weights to avoid overloading. Overloading affects steering, braking, and speed control, and may cause brake failure. Legal maximum weights may not be safe in bad weather or in mountains.'
  },

  {
    id: 212,
    title: 'What are the bad effects of overloading on trucks?',
    options: {
      a: 'Better steering, braking, and speed control',
      b: 'Faster speed on upgrades',
      c: 'Longer stopping distance and brake failure',
      d: 'Quicker acceleration'
    },
    answer: 'c',
    explanation: 'Overloading harms steering, braking, and speed control. It slows trucks on upgrades, and speeds them up on downgrades, increasing stopping distance and brake failure. Operating at legal maximum weights may not be safe in bad weather or in mountains."'
  },
  {
    id: 213,
    title: 'Why is it important to check the cargo and its securing devices after starting a trip?',
    options: {
      a: 'To see if any items have fallen off during transport',
      b: 'To make sure the truck is not overloaded',
      c: 'To ensure that the cargo is balanced and secured properly',
      d: 'To check if the cargo is getting wet'
    },
    answer: 'c',
    explanation: 'It is important to inspect the cargo and its securing devices again within the first 50 miles after starting a trip to ensure that the cargo is balanced and secured properly, and to make any adjustments needed to keep the load secure.'
  },

  {
    id: 214,
    title: 'When should you re-check the cargo and its securing devices during a trip?',
    options: {
      a: 'After every 100 miles',
      b: 'After every 200 miles',
      c: 'After driving for 3 hours or 150 miles, and after every break taken during driving',
      d: 'Only at the beginning of the trip'
    },
    answer: 'c',
    explanation: 'It is important to re-check the cargo and securing devices as often as necessary during a trip to keep the load secure. A good habit is to inspect again after driving for 3 hours or 150 miles, and after every break taken during driving.'
  },

  {
    id: 215,
    title: 'When should you inspect the cargo and securing devices again after starting a trip?',
    options: {
      a: 'After driving for 3 hours or 150 miles',
      b: 'Only when you take a break during driving',
      c: 'Once per day',
      d: 'Within the first 50 miles'
    },
    answer: 'd',
    explanation: 'It is important to re-check the cargo and securing devices within the first 50 miles after starting a trip to ensure that the load is still secure and properly balanced.'
  },

  {
    id: 216,
    title: 'What is the most effective way to overcome fatigue while driving?',
    options: {
      a: 'Drinking coffee or energy drinks',
      b: 'Taking a short nap',
      c: 'Using drugs',
      d: 'Pushing on and ignoring the signs of sleepiness'
    },
    answer: 'b',
    explanation: 'Taking a short nap is the most effective way to overcome fatigue while driving. It is important to stop and rest whenever you feel the first signs of sleepiness, even if it is earlier than planned.'
  },

  {
    id: 217,
    title: 'Are there any drugs that can overcome fatigue while driving?',
    options: {
      a: 'Yes, there are some drugs that can help',
      b: 'No, there are no drugs that can help',
      c: 'It depends on the type of drug',
      d: "Drugs can keep you awake for a while, but they won't make you alert"
    },
    answer: 'd',
    explanation: "While drugs can keep you awake for a while, they won't make you alert or overcome fatigue. It is important to stop and rest whenever you feel the first signs of sleepiness."
  },

  {
    id: 218,
    title: 'What are some ways to stay alert while driving?',
    options: {
      a: 'Keep the window or vent closed and take long breaks.',
      b: 'Plan to sleep between 6 a.m. and noon.',
      c: 'Ignore danger signals and push on.',
      d: 'Take short breaks, walk around, inspect the vehicle, and do physical exercises.'
    },
    answer: 'd',
    explanation: 'To stay alert while driving, take short breaks, walk around, inspect your vehicle, and do physical exercises. It is important to take these breaks before feeling really drowsy or tired.'
  },
  {
    id: 219,
    title: 'What are some danger signals of drowsy driving?',
    options: {
      a: 'Experiencing hunger and thirst.',
      b: 'Feeling hot and uncomfortable.',
      c: 'Having wandering, disconnected thoughts.',
      d: 'Being distracted by music or podcasts.'
    },
    answer: 'c',
    explanation: 'Some danger signals of drowsy driving include having wandering, disconnected thoughts, drifting between lanes, tailgating, missing traffic signs, and jerking the truck back into the lane.'
  },
  {
    id: 220,
    title: 'What should you do if you experience danger signals of drowsy driving?',
    options: {
      a: 'Ignore them and continue driving.',
      b: 'Drink coffee or take energy drinks to stay awake.',
      c: 'Pull off the road in a safe place and take a nap.',
      d: 'Turn up the radio and sing along to stay alert.'
    },
    answer: 'c',
    explanation: 'If you experience danger signals of drowsy driving, such as wandering thoughts or difficulty keeping your head up, pull off the road in a safe place and take a nap.'
  },
  {
    id: 221,
    title: 'What is the recommended time to take a mid-afternoon break?',
    options: {
      a: 'Between midnight and 6 a.m.',
      b: 'Between 6 a.m. and noon.',
      c: 'Between noon and 3 p.m.',
      d: 'Between 3 p.m. and 5 p.m.'
    },
    answer: 'c',
    explanation: 'To stay alert while driving, take a mid-afternoon break and plan to sleep between midnight and 6 a.m. The recommended time for a mid-afternoon break is between noon and 3 p.m.'
  },

  {
    id: 222,
    title: "Why is it dangerous to leave on a long trip when you're already tired?",
    options: {
      a: 'You will end up in a sleep debt that cannot be overcome with willpower.',
      b: "You won't be able to schedule trips for the hours you are normally awake.",
      c: "You won't be able to incorporate exercise into your daily life.",
      d: 'You will be less alert during the trip, increasing the risk of crashes.'
    },
    answer: 'd',
    explanation: "Explanation: Leaving on a long trip when you're already tired is dangerous because you will be less alert during the trip, increasing the risk of crashes. It's important to get enough sleep before starting a long trip to ensure driving safely."
  },
  {
    id: 223,
    title: 'What is the myth about alcohol and driving?',
    options: {
      a: 'Alcohol increases your ability to drive.',
      b: 'Some people can drink a lot and not be affected.',
      c: 'Coffee and a little fresh air will help a drinker sober up.',
      d: 'Stick with beer – It’s not as strong as wine or whiskey.'
    },
    answer: 'd',
    explanation:
      "Explanation: The myth about alcohol and driving is that sticking with beer is safer than wine or whiskey because it's not as strong. However, a few beers are the same as a few shots of whiskey or a few glasses of wine, and all types of alcohol will impair your ability to drive safely."
  },
  {
    id: 224,
    title: 'What are the danger signals of drowsy driving?',
    options: {
      a: 'Your eyes close or go out of focus by themselves.',
      b: 'You have trouble keeping your head up.',
      c: 'You can’t stop yawning.',
      d: 'All of the above.'
    },
    answer: 'd',
    explanation:
      'Explanation: The danger signals of drowsy driving include your eyes closing or going out of focus by themselves, trouble keeping your head up, inability to stop yawning, having wandering, disconnected thoughts, not remembering driving the last few miles, drifting between lanes, tailgating, missing traffic signs, jerking the truck back into the lane, and drifting off the road and narrowly missing crashing.'
  },
  {
    id: 225,
    title: 'What should you do to avoid the effects of medication that can make you sleepy?',
    options: {
      a: 'Consult your physician or a local sleep disorder center.',
      b: 'Eliminate fattening snacks and try fruit or vegetables instead.',
      c: 'Pick low-fat items at fast-food restaurants.',
      d: 'Avoid driving if you have to take medication that can make you sleepy.'
    },
    answer: 'd',
    explanation: 'Explanation: Many medicines can make you sleepy and have a label warning against operating vehicles or machinery. The best way to avoid the effects of medication that can make you sleepy is to avoid driving if you have to take such medication.'
  },
  {
    id: 226,
    title: 'What is the rule for using drugs while driving?',
    options: {
      a: "Don't use any drug that hides fatigue and avoid illegal drugs",
      b: 'Only use drugs given by a doctor',
      c: 'Use any legal drug as long as it is not a controlled substance'
    },
    answer: 'a',
    explanation: "Explanation: The safest rule is not to mix drugs with driving at all. Don't use any drug that hides fatigue, and stay away from illegal drugs."
  },

  {
    id: 227,
    title: 'What should you pay attention to regarding legitimate drugs and medicines?',
    options: {
      a: 'The color of the pills',
      b: "The warning labels and doctor's orders regarding possible effects",
      c: 'The price of the medication'
    },
    answer: 'b',
    explanation: "Explanation: Pay attention to warning labels for legitimate drugs and medicines and to doctor's orders regarding possible effects. This will help prevent the use of drugs that can make you drowsy or otherwise affect your driving ability."
  },

  {
    id: 228,
    title: 'What are the potential consequences of using drugs while driving?',
    options: {
      a: 'Property damage only',
      b: 'Injury and property damage',
      c: 'Death, injury, and property damage'
    },
    answer: 'c',
    explanation: "Explanation: Use of drugs can lead to traffic crashes resulting in death, injury, and property damage. It can also lead to arrest, fines, and jail sentences, and may mean the end of a person's driving career."
  },

  {
    id: 229,
    title: 'What is the safest rule when it comes to mixing drugs and driving?',
    options: {
      a: "It's okay to mix drugs with driving as long as they were prescribed by a doctor",
      b: "Don't mix drugs with driving at all",
      c: 'Mixing drugs with driving is only safe if they are over-the-counter medications'
    },
    answer: 'b',
    explanation: "Explanation: The safest rule is don't mix drugs with driving at all. Use of drugs can lead to traffic crashes resulting in death, injury, and property damage, and it can also lead to arrest, fines, and jail sentences. It can mean the end of a person's driving career."
  },
  {
    id: 230,
    title: 'What are the potential effects of alcohol on driving?',
    options: {
      a: 'Improved muscle control, vision, and coordination',
      b: 'Improved judgment and self-control',
      c: 'Straddling lanes, quick, jerky starts, running stop signs and red lights, and improper passing'
    },
    answer: 'c',
    explanation: ' Alcohol impairs muscle control, vision, and coordination as BAC increases, causing unsafe driving behaviors like lane straddling, quick starts, and failure to obey traffic signs. Good judgment and self-control are crucial for safe driving, but alcohol can impair them.'
  },

  {
    id: 231,
    title: 'What factors determine Blood Alcohol Concentration (BAC)?',
    options: {
      a: 'The type of alcohol you drink',
      b: 'The speed of your drinking and your weight',
      c: 'The temperature of the alcohol',
      d: 'The color of the alcohol'
    },
    answer: 'b',
    explanation: "Explanation: BAC is determined by the amount of alcohol you drink (more alcohol means higher BAC), how fast you drink (faster drinking means higher BAC), and your weight (a small person doesn't have to drink as much to reach the same BAC)."
  },
  {
    id: 232,
    title: 'What is the maximum amount of alcohol the liver can process per hour?',
    options: {
      a: '1 ounce',
      b: '2 ounces',
      c: '3 ounces',
      d: '1/3 an ounce'
    },
    answer: 'd',
    explanation: 'Explanation: The liver can only process one-third an ounce of alcohol per hour, which is considerably less than the alcohol in a standard drink. This is a fixed rate, so only time, not black coffee or a cold shower, will sober you up.'
  },
  {
    id: 233,
    title: 'How does alcohol affect driving abilities?',
    options: {
      a: 'Improves muscle coordination and reaction time',
      b: 'Impairs muscle coordination, reaction time, and judgment',
      c: 'Has no effect on driving abilities'
    },
    answer: 'b',
    explanation: 'Explanation: Alcohol impairs muscle coordination, reaction time, depth perception, night vision, and judgment and inhibition. This can result in dangerous driving behaviors and is a leading cause of traffic crashes resulting in deaths.'
  },
  {
    id: 234,
    title: 'What is a drink and how does it affect human performance?',
    options: {
      a: 'A beverage that improves human performance',
      b: 'A beverage that contains alcohol, which impairs human performance',
      c: 'A beverage that has no effect on human performance'
    },
    answer: 'b',
    explanation:
      'Explanation: It is the alcohol in drinks that affects human performance. A drink can come in different forms like beer, wine, or liquor, but they all contain the same amount of alcohol. Alcohol impairs muscle coordination, reaction time, depth perception, night vision, and judgment and inhibition, which can lead to dangerous driving behaviors.'
  },
  {
    id: 235,
    title: 'What should you do first in case of a fire in your vehicle?',
    options: {
      a: 'Try to put out the fire immediately',
      b: 'Drive the vehicle to a service station',
      c: 'Pull off the road and park in an open area'
    },
    answer: 'c',
    explanation: 'Explanation: The first step in case of a fire in your vehicle is to pull off the road and park in an open area away from anything that might catch fire. Notify emergency services of your problem and location.'
  },
  {
    id: 236,
    title: 'What should you do before trying to put out a fire in your vehicle?',
    options: {
      a: 'Park in a service station',
      b: 'Open the hood of the vehicle',
      c: 'Make sure the fire does not spread any further'
    },
    answer: 'c',
    explanation:
      'Explanation: Before trying to put out a fire in your vehicle, make sure that it does not spread any further. This includes turning off the engine in case of an engine fire and keeping the doors of a cargo van or box trailer shut in case of a cargo fire containing hazardous materials.'
  },
  {
    id: 237,
    title: 'What should you do when using a fire extinguisher to put out a fire?',
    options: {
      a: 'Stay as close to the fire as possible',
      b: 'Aim at the flames, not the source or base of the fire',
      c: 'Position yourself upwind'
    },
    answer: 'c',
    explanation:
      'Explanation: When using a fire extinguisher to put out a fire, you should position yourself upwind and let the wind carry the extinguisher to the fire. Aim at the source or base of the fire and stay as far away from the fire as possible. Continue until the burning object has been cooled, as the absence of smoke or flame does not mean the fire cannot restart.'
  },
  {
    id: 238,
    title: 'What are the basic steps to be taken at any crash?',
    options: {
      a: 'Protect the area, notify authorities, and care for the injured.',
      b: 'Move the vehicles to the side of the road, put on flashers, and set out reflective triangles.',
      c: 'Call for assistance, determine the exact location, and wait for emergency vehicles.'
    },
    answer: 'a',
    explanation: 'The basic steps to be taken at any crash are to protect the area, notify authorities, and care for the injured.'
  },
  {
    id: 239,
    title: 'What should you do to protect the crash area?',
    options: {
      a: 'Park away from the crash and set out reflective triangles.',
      b: 'Try to get your vehicle to the side of the road and stop.',
      c: 'Put on your flashers and call for assistance before getting out of your vehicle.'
    },
    answer: 'a',
    explanation: 'To protect the crash area, you should park away from the crash, put on your flashers, and set out reflective triangles.'
  },
  {
    id: 240,
    title: 'What should you do if you encounter a crash and not seriously hurt?',
    options: {
      a: 'Act to prevent further damage or injury, protect the area, and care for the injured.',
      b: 'Move your vehicle to the side of the road and call for assistance.',
      c: 'Stop heavy bleeding by applying pressure to the wound.'
    },
    answer: 'a',
    explanation: 'If you encounter a crash and not seriously hurt, you should act to prevent further damage or injury, protect the area, and care for the injured.'
  },

  {
    id: 241,
    title: 'What causes a skid?',
    options: {
      a: 'Driving too slow',
      b: 'Overbraking or braking too hard',
      c: 'Not accelerating enough'
    },
    answer: 'b',
    explanation: 'Overbraking or braking too hard can cause the tires to lose their grip on the road and result in a skid.'
  },
  {
    id: 242,
    title: 'What is the most common type of skid?',
    options: {
      a: 'Oversteering skid',
      b: 'Overacceleration skid',
      c: 'Drive-wheel skid'
    },
    answer: 'c',
    explanation: 'Drive-wheel skids, where the rear wheels lose traction through excessive braking or acceleration, are the most common type of skid.'
  },
  {
    id: 243,
    title: 'What should you do to correct a drive-wheel braking skid?',
    options: {
      a: 'Press the accelerator pedal harder',
      b: 'Step on the brake pedal firmly',
      c: 'Stop braking and turn quickly in the direction you want the vehicle to go'
    },
    answer: 'c',
    explanation: 'To correct a drive-wheel braking skid, you should stop braking to let the rear wheels roll again and turn quickly in the direction you want the vehicle to go. You should also countersteer to prevent the vehicle from continuing to skid in the opposite direction.'
  },
  {
    id: 301,
    title: 'What should you do first to protect the crash area?',
    options: {
      a: 'Park in an open area, away from buildings, trees, brush, and other vehicles.',
      b: 'Put on your flashers and park immediately next to the crash area.',
      c: 'Set out reflective triangles to warn other traffic and park away from the crash.'
    },
    answer: 'c',
    explanation: 'Explanation: To protect the crash area, put on your flashers, set out reflective triangles to warn other traffic, and park away from the crash. This will prevent further crashes and allow emergency vehicles to access the crash area.'
  },
  {
    id: 302,
    title: 'What is the most common cause of skids?',
    options: {
      a: 'Oversteering',
      b: 'Overbraking',
      c: 'Driving too fast for road conditions',
      d: 'Overacceleration'
    },
    answer: 'c',
    explanation: "Explanation: Driving too fast for road conditions is the most common cause of skids. Drivers who adjust their driving to conditions don't over-accelerate and don't have to over-brake or over-steer from too much speed."
  },
  {
    id: 303,
    title: 'What should you do to correct a drive-wheel braking skid?',
    options: {
      a: 'Turn quickly and jam on the brakes.',
      b: 'Stop braking and turn the steering wheel quickly.',
      c: 'Keep braking hard until the skid is corrected.',
      d: 'Keep the steering wheel straight and hold the brake pedal down.'
    },
    answer: 'b',
    explanation:
      'Explanation: To correct a drive-wheel braking skid, stop braking and turn the steering wheel quickly in the direction you want the vehicle to go. This will keep the vehicle in a straight line and prevent it from sliding any further. You must turn the wheel quickly and countersteer as necessary to regain control of the vehicle.'
  },
  {
    id: 304,
    title: 'What is the best way to have both hands on the steering wheel in case of an emergency?',
    options: {
      a: 'Keep them on the wheel all the time',
      b: 'Keep one hand on the wheel and the other on the gear shift',
      c: 'Keep one hand on the wheel and the other on the door handle'
    },
    answer: 'a',
    explanation: "Explanation: In order to turn quickly in case of an emergency, it's important to have a firm grip on the steering wheel with both hands. The best way to do this is to keep both hands on the wheel all the time."
  },
  {
    id: 305,
    title: 'What should you not do while turning quickly in case of an emergency?',
    options: {
      a: 'Apply the brake',
      b: 'Turn more than needed to clear the obstacle',
      c: 'Countersteer'
    },
    answer: 'a',
    explanation: "Explanation: When turning quickly in an emergency, you should not apply the brake while turning. It's easy to lock the wheels while turning and cause a skid or lose control."
  },
  {
    id: 306,
    title: 'Why is it almost always better to turn to avoid an obstacle than to stop?',
    options: {
      a: 'Turning is more fun',
      b: 'Turning is faster',
      c: 'You can almost always turn to miss an obstacle more quickly than you can stop'
    },
    answer: 'c',
    explanation:
      "Explanation: In an emergency situation, you may not have enough room to stop. You can almost always turn to miss an obstacle more quickly than you can stop. However, it's important to keep in mind that top-heavy vehicles and tractors with multiple trailers may flip over when turning quickly."
  },
  {
    id: 307,
    title: 'What should you do to protect the area in case of a crash?',
    options: {
      a: 'Park in a service station',
      b: 'Park in an open area, away from buildings, trees, brush, other vehicles, or anything that might catch fire',
      c: 'Stop immediately in the middle of the road'
    },
    answer: 'b',
    explanation: 'In case of a crash, the first thing to do is to protect the area. You should park in an open area, away from buildings, trees, brush, other vehicles, or anything that might catch fire.'
  },
  {
    id: 308,
    title: 'What is the correct way to brake in an emergency?',
    options: {
      a: 'Push down on the brake pedal as hard as you can',
      b: 'Apply the brakes as hard as you can without locking the wheels',
      c: 'Release the brakes and pump them repeatedly'
    },
    answer: 'b',
    explanation:
      'In an emergency, you should brake in a way that will keep your vehicle in a straight line and allow you to turn if it becomes necessary. You can use the "controlled braking" method or the "stab braking" method. With the controlled braking method, you apply the brakes as hard as you can without locking the wheels. If you need to make a larger steering adjustment or if the wheels lock, release the brakes. Re-apply the brakes as soon as you can.'
  },
  {
    id: 309,
    title: 'Why should you never race a train to a crossing?',
    options: {
      a: 'Because it is illegal',
      b: 'Because it is impossible to judge the speed of an approaching train',
      c: 'Because trains always have the right of way'
    },
    answer: 'b',
    explanation:
      'You should never attempt to race a train to a crossing because it is extremely difficult to judge the speed of an approaching train. It is important to reduce speed and hold it to a point which will permit you to stop short of the tracks in case a stop is necessary. Additionally, you should not rely solely upon the presence of warning signals, gates, or flagmen to warn of the approach of trains. Be especially alert at crossings that do not have gates or flashing red light signals.'
  },

  {
    id: 310,
    title: 'What should you do in case of a fire?',
    options: {
      a: 'Stay in the vehicle and call for help',
      b: 'Park in an open area, away from buildings and notify emergency services',
      c: 'Pull into a service station to use a fire extinguisher'
    },
    answer: 'b',
    explanation: 'In case of a fire, pull off the road, park in an open area away from buildings and notify emergency services.'
  },

  {
    id: 311,
    title: 'What should you do to protect the crash area?',
    options: {
      a: 'If stopping to help, park near the crash',
      b: 'Set out reflective triangles and park away from the crash',
      c: 'Call for assistance before getting out of your vehicle'
    },
    answer: 'b',
    explanation: 'To protect the crash area, park away from the crash, put on your flashers, and set out reflective triangles to warn other traffic.'
  },

  {
    id: 312,
    title: 'What is the correct way to perform emergency braking?',
    options: {
      a: 'Jam on the brakes as hard as you can',
      b: 'Use controlled braking method or stab braking method',
      c: 'Turn the wheel in the direction you want the vehicle to go'
    },
    answer: 'b',
    explanation: 'In an emergency, use controlled braking or stab braking methods to keep your vehicle in a straight line and avoid locking up the wheels, which can cause a skid.'
  },

  {
    id: 313,
    title: 'Why is it important to check engine coolant when driving in very hot weather?',
    options: {
      a: 'To make sure the air conditioning is working properly',
      b: 'To prevent engine failure and possible fire',
      c: 'To improve fuel efficiency'
    },
    answer: 'b',
    explanation: 'In hot weather, check engine coolant to prevent engine failure and possible fire. Antifreeze helps the engine under hot conditions as well as cold conditions.'
  },
  {
    id: 314,
    title: 'What should you do when driving on slippery roads?',
    options: {
      a: 'Drive as fast as possible',
      b: 'Drive slowly and smoothly',
      c: 'Avoid driving altogether'
    },
    answer: 'b',
    explanation:
      "Drive slowly and smoothly on slippery roads. If it is very slippery, you shouldn't drive at all. Start gently and slowly to get the feel of the road. Adjust turning and braking to conditions. Adjust speed and space to conditions. When driving in heavy rain or deep standing water, your brakes will get wet. Water in the brakes can cause a lack of braking power, wheel lockups, and other issues."
  },

  {
    id: 315,
    title: 'How can you check for ice on the road?',
    options: {
      a: 'Check for spray from other vehicles',
      b: 'Check for traffic jams',
      c: 'Check for road signs'
    },
    answer: 'a',
    explanation: 'Check for ice on the road, especially bridges and overpasses. A lack of spray from other vehicles indicates ice has formed on the road. Check your mirrors and wiper blades for ice. If they have ice, the road most likely will be icy as well.'
  },

  {
    id: 316,
    title: 'What should you do when your brakes get wet while driving in heavy rain or deep standing water?',
    options: {
      a: 'Drive faster to dry the brakes',
      b: 'Apply the brakes suddenly to remove the water',
      c: 'Expect weaker and uneven braking power'
    },
    answer: 'c',
    explanation:
      'When driving in heavy rain or deep standing water, your brakes will get wet. Water in the brakes can cause the brakes to be weak, to apply unevenly, or to grab. This can cause lack of braking power, wheel lockups, pulling to one side or the other, and jackknife if you pull a trailer.'
  },

  {
    id: 317,
    title: 'Why should you never race a train to a crossing?',
    options: {
      a: 'Because it is illegal',
      b: 'Because it is impossible to judge the speed of an approaching train',
      c: 'Because trains always have the right of way',
      d: 'Because it can result in a collision or a fatal accident'
    },
    answer: 'b',
    explanation: 'Never race a train to a crossing because it is difficult to judge its speed. Reduce speed and hold it to a point that allows you to stop short of the tracks in case of emergency.'
  },

  {
    id: 318,
    title: 'What should you do when driving in very hot weather?',
    options: {
      a: 'Check tire pressure every two hours',
      b: 'Make sure the engine cooling system has enough water and antifreeze',
      c: 'Drive slowly and smoothly on slippery roads',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'To drive safely in hot weather, check tire pressure every two hours, ensure there is enough engine oil and coolant, and drive slowly and smoothly on slippery roads.'
  },

  {
    id: 319,
    title: 'What should you do when driving in fog?',
    options: {
      a: 'Obey all fog-related warning signs',
      b: 'Slow down before you enter fog',
      c: 'Use low-beam headlights and 4-way flashers',
      d: 'All of the above'
    },
    answer: 'd',
    explanation: 'When driving in fog, obey all warning signs, slow down before entering fog, use low-beam headlights and 4-way flashers, and listen for traffic you cannot see.'
  },

  {
    id: 320,
    title: 'What should you do before driving at night?',
    options: {
      a: 'Wear sunglasses to protect your eyes',
      b: 'Make sure your eyeglasses are scratched',
      c: 'Clean your eyeglasses if necessary and avoid wearing sunglasses',
      d: 'Drive without checking your eyeglasses'
    },
    answer: 'c',
    explanation: 'Before driving at night, make sure you are rested, your eyeglasses are clean, and you do a complete pre-trip inspection of your vehicle. Avoid wearing sunglasses at night to improve your visibility. '
  },

  {
    id: 321,
    title: 'What should you do to avoid blinding other drivers with your headlights?',
    options: {
      a: 'Leave your headlights on high beams at all times',
      b: 'Dim your lights when you see a vehicle approaching within 1000 feet',
      c: 'Dim your lights within 500 feet of an oncoming vehicle or when following another vehicle within 500 feet',
      d: "Don't dim your lights at all"
    },
    answer: 'c',
    explanation:
      'To avoid blinding other drivers, dim your lights within 500 feet of an oncoming vehicle and when following another vehicle within 500 feet. Glare from your headlights can cause problems for drivers coming toward you and bother drivers going in the same direction you are, when your lights shine in their rearview mirrors.'
  },

  {
    id: 322,
    title: "What should you do if other drivers don't dim their lights when approaching you?",
    options: {
      a: 'Flash your headlights to get their attention',
      b: 'Put your high beams on to show them how it feels',
      c: 'Look directly at their lights to show your frustration',
      d: "Don't try to get back at them by putting your own high beams on"
    },
    answer: 'd',
    explanation: "If other drivers don't put their low beams on, don't try to 'get back at them' by putting your own high beams on. This increases glare for oncoming drivers and increases the chance of a crash. Instead, look slightly to the right at a right lane or edge marking, if available."
  },
  {
    id: 323,
    title: 'What must you do to avoid blinding other drivers at night?',
    options: {
      a: 'Use your high beams when following another vehicle within 500 feet.',
      b: 'Look directly at the lights of oncoming vehicles.',
      c: 'Dim your lights within 500 feet of an oncoming vehicle and when following another vehicle within 500 feet.',
      d: 'Turn off your headlights when driving on well-lit roads.'
    },
    answer: 'c',
    explanation:
      'To avoid blinding other drivers at night, you must dim your lights within 500 feet of an oncoming vehicle and when following another vehicle within 500 feet. Additionally, you should avoid looking directly at the lights of oncoming vehicles and should not use your high beams when following another vehicle within 500 feet.'
  },
  {
    id: 324,
    title: 'What is the best advice for driving in fog?',
    options: {
      a: 'Drive as you normally would.',
      b: 'Obey all fog-related warning signs and drive slowly.',
      c: 'Turn on your high-beam headlights.',
      d: 'Stop along the side of the road until visibility improves.'
    },
    answer: 'b',
    explanation:
      "The best advice for driving in fog is to obey all fog-related warning signs and drive slowly. Use low-beam headlights and fog lights for best visibility, turn on your 4-way flashers, and be aware of vehicles on the side of the roadway. Avoid passing other vehicles and don't stop along the side of the road unless absolutely necessary."
  },
  {
    id: 325,
    title: 'Why should you avoid making any gestures that might anger another driver?',
    options: {
      a: 'To show your disapproval',
      b: 'To entertain other drivers',
      c: 'To avoid angering other drivers',
      d: 'To get the attention of other drivers'
    },
    answer: 'c',
    explanation:
      "It's important to avoid making any gestures that might anger another driver, even seemingly harmless expressions of irritation like shaking your head. This is because it can lead to road rage, which can be dangerous. Instead, be a cautious and courteous driver and give other drivers the benefit of the doubt."
  },
  {
    id: 326,
    title: 'Why should you avoid making any gestures that might anger another driver?',
    options: {
      a: 'To show your disapproval',
      b: 'To entertain other drivers',
      c: 'To avoid angering other drivers',
      d: 'To make other drivers more aggressive'
    },
    answer: 'c',
    explanation:
      "It's important to avoid making any gestures that might anger another driver, even seemingly harmless expressions of irritation like shaking your head. This is because it can lead to road rage, which can be dangerous. Instead, be a cautious and courteous driver and give other drivers the benefit of the doubt."
  },
  {
    id: 327,
    title: 'What should you do if your vehicle starts to hydroplane?',
    options: {
      a: 'Slam on the brakes',
      b: 'Accelerate quickly',
      c: 'Steer in the opposite direction',
      d: 'Ease off the gas and steer straight'
    },
    answer: 'd',
    explanation: 'If your vehicle starts to hydroplane, the best thing to do is to ease off the gas and steer straight. Avoid braking suddenly or making sudden turns, as this can cause you to lose control of the vehicle. Once you have regained control, you can slowly begin to accelerate again.'
  },
  {
    id: 328,
    title: 'Why should you avoid making any gestures that might anger another driver?',
    options: {
      a: 'To show your disapproval',
      b: 'To entertain other drivers',
      c: 'To avoid angering other drivers',
      d: 'To assert dominance on the road'
    },
    answer: 'c',
    explanation:
      "It's important to avoid making any gestures that might anger another driver, even seemingly harmless expressions of irritation like shaking your head. This is because it can lead to road rage, which can be dangerous. Instead, be a cautious and courteous driver and give other drivers the benefit of the doubt."
  },
  {
    id: 329,
    title: 'What should you do if confronted by an aggressive driver?',
    options: {
      a: 'Challenge them by speeding up',
      b: "Make eye contact to show you're not intimidated",
      c: 'Ignore them and keep driving normally',
      d: 'Get out of their way'
    },
    answer: 'd',
    explanation:
      'If confronted by an aggressive driver, the first thing you should do is make every attempt to get out of their way. Do not challenge them by speeding up or attempting to hold your own in your travel lane. Avoid eye contact and ignore gestures. Report aggressive drivers to the appropriate authorities by providing a vehicle description, license number, location, and, if possible, direction of travel. If you have a cell phone and can do it safely, call the police. If an aggressive driver is involved in a crash farther down the road, stop a safe distance from the crash scene, wait for the police to arrive, and report the driving behavior that you witnessed.'
  },
  {
    id: 330,
    title: 'What is the most important space around your vehicle?',
    options: {
      a: 'The space behind your vehicle',
      b: 'The space on either side of your vehicle',
      c: 'The space above your vehicle',
      d: 'The space ahead of your vehicle'
    },
    answer: 'd',
    explanation: 'Of all the space around your vehicle, it is the area ahead of the vehicle that is most important. This is because you need space ahead in case you must suddenly stop, and following too closely can be a major cause of accidents.'
  },
  {
    id: 340,
    title: 'How much space should you keep in front of you, according to one good rule?',
    options: {
      a: 'One second for each 5 feet of vehicle length',
      b: 'One second for each 15 feet of vehicle length',
      c: 'One second for each 20 feet of vehicle length',
      d: 'One second for each 10 feet of vehicle length'
    },
    answer: 'd',
    explanation:
      "One good rule says you need at least one second for each 10 feet of vehicle length at speeds below 40 mph. At greater speeds, you must add 1 second for safety. For example, if you are driving a 40-foot vehicle, you should leave 4 seconds between you and the vehicle ahead. In a 60-foot rig, you'll need 6 seconds. Over 40 mph, you'd need 5 seconds for a 40-foot vehicle and 7 seconds for a 60-foot vehicle."
  },
  {
    id: 341,
    title: "What should you do if you're driving a 40-foot truck and only counted up to 2 seconds when checking your following distance?",
    options: {
      a: 'Increase your speed to create more space',
      b: 'Continue driving at the same speed and distance',
      c: 'Brake immediately to create more space',
      d: 'Drop back a little and count again until you have 4 seconds of following distance'
    },
    answer: 'd',
    explanation:
      "If you're driving a 40-foot truck and only counted up to 2 seconds when checking your following distance, you're too close. Drop back a little and count again until you have 4 seconds of following distance (or 5 seconds, if you're going over 40 mph). After a little practice, you will know how far back you should be. Remember to add 1 second for speeds above 40 mph."
  },
  {
    id: 342,
    title: 'What should you consider when selecting a speed on a downgrade?',
    options: {
      a: 'Total length of the vehicle',
      b: 'The weight of the vehicle and cargo',
      c: 'The distance to the next rest stop',
      d: 'The color of the vehicle'
    },
    answer: 'b',
    explanation: 'When selecting a speed on a downgrade, you should consider the total weight of the vehicle and cargo, as well as the length and steepness of the grade, road conditions, and weather.'
  },
  {
    id: 343,
    title: 'What is the greatest factor in controlling your speed on downgrades?',
    options: {
      a: 'The brakes',
      b: 'The accelerator',
      c: 'The steering wheel',
      d: 'The headlights'
    },
    answer: 'a',
    explanation: 'You must use the braking effect of the engine as the principal way of controlling your speed on downgrades. Save your brakes so you will be able to slow or stop as required by road and traffic conditions.'
  },
  {
    id: 344,
    title: 'What should you consider when selecting a speed on a downgrade?',
    options: {
      a: 'Total length of the vehicle',
      b: 'The weight of the vehicle and cargo',
      c: 'The distance to the next rest stop',
      d: 'All of the above'
    },
    answer: 'b',
    explanation: 'When selecting a speed on a downgrade, you should consider the total weight of the vehicle and cargo, as well as the length and steepness of the grade, road conditions, and weather.'
  },
  {
    id: 345,
    title: 'What is perception distance in relation to stopping distance?',
    options: {
      a: 'The distance your vehicle will travel while braking',
      b: 'The distance your vehicle will travel before physically hitting the brakes',
      c: 'The distance your vehicle travels from the time your eyes see a hazard until your brain recognizes it',
      d: 'The distance your vehicle travels after hitting the brakes'
    },
    answer: 'c',
    explanation: 'Perception distance is the distance your vehicle travels from the time your eyes see a hazard until your brain recognizes it. It is an important factor in determining stopping distance.'
  },
  {
    id: 346,
    title: 'What is the average reaction time for an alert driver?',
    options: {
      a: '1 second to 1.5 seconds',
      b: '2 seconds to 2.5 seconds',
      c: '3 seconds to 3.5 seconds',
      d: '0.5 seconds to 1 second'
    },
    answer: 'a',
    explanation: 'The average driver has a reaction time of ¾ second to 1 second. This means that at 55 mph, the vehicle will travel 61 feet before the driver physically hits the brakes in response to a hazard seen ahead.'
  },
  {
    id: 347,
    title: 'What is the total stopping distance?',
    options: {
      a: 'The distance your vehicle will travel while accelerating',
      b: 'The distance your vehicle will travel before physically hitting the brakes',
      c: 'The sum of perception distance, reaction distance, and braking distance',
      d: 'The distance your vehicle will travel in reverse'
    },
    answer: 'c',
    explanation: 'Total stopping distance is the sum of perception distance, reaction distance, and braking distance. It is the total minimum distance your vehicle will travel, in ideal conditions with everything considered until you can bring your vehicle to a complete stop.'
  }
]
