# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
First: Add new column called AgentId to Agents table to save the Agent Id, Assuming that we use MS SQL database I suggest the column tye to be string and the length be 6 characters(so varchar(6) in MS SQL to hold agent id).

Second: for existing agents we need to create a new agent id. We need to create a query to run agaist Agents table to fill the null values. It can be something like this:
SELECT @randomString = CONVERT(varchar(255), NEWID()) 
and then update all Agents table records in a loop. then we can remove the "Allow Null" attribute from AgentId column so it will prevent creating an agent without AgentId column in the future.

Third: Write a function to generate random 6-digit string including capital letters and string to generate agent ids when we create a new agent. It should only save this column only when new record is generated so does not touch this column when editing an agent. 

Forth: In the generateReport I assume that it runs a query which gets the report and it should have a join between Facilities and Agents tables. We should add the new column AgentId in the query so something like Agents.AgentId is added to the select part of that query.

Fifth: In getShiftsByFacility funtion for the meta data part, we should add the new column AgentId since AgentId is art of the meta data of the agent now.