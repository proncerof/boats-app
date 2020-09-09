CREATE TABLE USERS(
  id SERIAL PRIMARY KEY,
  username VARCHAR (50) UNIQUE NOT NULL,
  password VARCHAR (60) NOT NULL
);
CREATE TABLE BOATS(
  id SERIAL PRIMARY KEY,
  name VARCHAR (50) UNIQUE NOT NULL,
  description TEXT NOT NULL
);
INSERT INTO USERS(username, password)
VALUES (
    'openweb',
    '$2a$10$OW/o.qPMqc2PE6w4em/OQeHlmDWxlnD9p203HILkfFQ74mmK0pqkW'
  );
INSERT INTO BOATS(name, description)
VALUES (
    'Fishing Boats',
    'Built exclusively for fishing, fishing boats in different sizes are used on both salt and freshwater bodies. The immediate qualities of these boats include stability, strength, and durability to survive the fishing ventures across various kinds of waterways. Fishing boats can be both manned and un-manned types. The all-purpose fishing boats generally include features such as a front bow, rod lockers, a trolling motor system, an outboard power and live wells. Compared to the boats meant for lakes and rivers, the boats fishing in the offshore environment will be taller in size and strong-built to withstand saltwater and harsher conditions.  On the other hand, the aluminium fishing boats weigh less and are highly durable.  The bass boats designed with slim profiles, and consist of 2-3 anglers on board, are such type of a boat used for fishing.'
  );
INSERT INTO BOATS(name, description)
VALUES (
    'Dinghy Boats',
    'A dinghy can be a small inflatable boat usually made of rubber and comprises of cross thwarts and rowlocks that act as seats and oars, respectively. Commonly powered by sails, oars and small outboard engines, Dinghies are popularly known as sailboats, rowboats or simply inflatables. These boats team up with more significant vessels and come in handy when the mothership is unable to navigate in narrow areas. These rowboats can also be utilised as companion boats and are taken to camping expeditions or even for fishing in shallow waters.'
  );
INSERT INTO BOATS(name, description)
VALUES (
    'Deck Boats',
    'As the name suggests, Deck Boats come with an open deck area that provides plenty of seating arrangements for a small group of people. The boat features a V shape hull with a wide beam to accommodate more passengers than a pontoon boat. Usually measures 25-35 ft in length, they are provided with a stern power drive, and popularly used for recreational activities like swimming, water sports etc.'
  );
INSERT INTO BOATS(name, description)
VALUES (
    'Bowrider Boats',
    'Known as a quintessential family boat, Bowriders offer room for eight or more passengers across its cockpit, bow cockpit and helm. The bow area of these types of boats has been constructed in a unique way to allow a spacious seating arrangement. Moreover, these runabout-style vessels contain a swim platform for putting on wake-boards, or for swimming activities feel-good leisure boating. With its classic V-shaped bottom, Bowrider Boats offer a splendid ride across different water conditions. The usage of stern drive power is the typical rule, but the demand for outboard engines is increasing at a high rate.'
  );
INSERT INTO BOATS(name, description)
VALUES (
    'Catamaran Boats',
    'Unlike other boats, Catamaran is a multi-hulled watercraft that features two parallel hulls of equal size. Compared to vessels with a single hull, Catamaran Boats features less hull volume, shallower draft and higher displacement. Excellent for fishing purposes and even for leisurely cruising abilities, Catamarans are being built for various purposes across the world.'
  );
INSERT INTO BOATS(name, description)
VALUES (
    'Cuddy Cabins Boats',
    'Well-suited for fishing, yachting, sailing and other water sports, Cuddy Cabins Boats is one of the most family-friendly vessels. Featuring a closed deck over the boat’s bow, the boat allows a convenient storage space and too easy navigation. The cuddy cabin boats are usually built of fibreglass and aluminium, and the minimum length is around 4.75 meters.'
  );
INSERT INTO BOATS(name, description)
VALUES (
    'Centre Console Boats',
    'Essentially a boat that features a hull with no cabin or foredeck and the helm station in the centre of the boat, Centre Consoles are great fishing platforms. These boats are ideal for sports fishing and work in harsh offshore waterways where there is plenty of ocean fish. The essential equipment consists of bait wells, gunwale rod holders, fish lockers and outriggers, to name a few. In addition, the deck provides a powerful insulation system for icing the fish storage.'
  );
INSERT INTO BOATS(name, description)
VALUES (
    'Houseboats',
    'There are houseboats of different shapes and sizes across the world, offering the luxury of living on water and provide excellent recreational and holiday accommodation facilities. Houseboats, also known as Float house, incorporate broad flooring and modern amenities such as entertainment, fine dining, and proper sleeping arrangements. The boats offer fun activities like relaxed cruising, water sports, family sailing etc. While most of the houseboats are motorized, there are boats incapable of operating under their own power since they are usually kept stationary at a location.'
  );
INSERT INTO BOATS(name, description)
VALUES (
    'Trawler Boats',
    'With features including a displacement hull and fuel-efficient engines, trawlers are intended for them to smoothly manoeuvre through the water bodies without exhausting much horsepower or consuming excessive fuel. This quality makes the trawler a brilliant option for participating in long-range cruising activities, as all modern facilities can be found aboard the boat.'
  );
INSERT INTO BOATS(name, description)
VALUES (
    'Cabin Cruiser Boats',
    'Offering all the essential features of a home, Cabin Cruiser boats are great for relaxed sailing. Designed with a galley and a berth, these boats offer modern comforts like heaters, air conditioners, and power generators. In addition to a deep-V bottom, the Cabin Cruisers employ a secure shaft drive mechanism plus rudder steering and therefore are mainly suited for movement in the salty water.'
  );
INSERT INTO BOATS(name, description)
VALUES (
    'Game boats',
    'Powered by diesel or petrol engines, these fibreglass boats are large in measurement and are useful for the game fish pursuit, especially pelagic fishes like tuna and marlin. Equipped with sleeping berths, plumbing system, and cooking galleys, these boats allow passengers to continue their activities for a couple of days or more.'
  );