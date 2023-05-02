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
  }
]
