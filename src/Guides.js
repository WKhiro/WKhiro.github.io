import React from 'react';
import Container from 'react-bootstrap/Container';
import { Spring } from 'react-spring/renderprops';
import { GradientBackground } from './components/GradientBackground';
import { Reference } from './components/Reference';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styles = styled.div`

.project
{
  display: inline-flex;
}

/*
  mins: prevent web page repositioning during animation
  maxs: prevent elongated column height when reducing page size
*/
.project.image
{
    min-width: 202px;
    min-height: 321px;
    max-height: 321px;
    border: 3px solid white;
    box-shadow: 2px 2px 4px black;
    margin-bottom: 10px;
    margin-right: 50px;
}

.project.text
{
  color: white;
  text-shadow: 2px 2px 4px black;
}

a
{
  color: aqua;
  text-decoration: none;
  &:hover
  {
    opacity: 0.8;
  }
}

.textHolder
{
  color: white;
  text-shadow: 2px 2px 4px black;
}

.imgScale
{
  width: 64px;
  height: 64px;
}

`;

export const Guides = () => (
  <Styles>
    <GradientBackground />
    <Container>
      <Container className="textHolder">
        <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/4/46/RivenSquare.png?version=283e9a80fdf9743804abc4e16e43975c" alt=""/>
        <h1> Riven </h1>
        <p> Welcome to a comprehensive guide on my favorite champion from League of Legends, Riven. </p>
        <p> This guide is currently a work-in-progress </p>
        <h1> Recommended Build </h1>
        <p> Black Cleaver, Death's Dance, Guardian Angel, Sterak's Gage, Mortal Reminder </p>
        <h1> Boots </h1>
        <p> Ninja Tabi, Mercury's Treads, Ionian Boots of Lucidity </p>
        <h1> Runes </h1>
        <p> Conqueror, Triumph, Legend: Alacrity, Coup de Grace </p>
        <p> Transcendence, Gathering Storm </p>
        <h1> Overview and Personal Opinion </h1>
        <p> Riven is a unique champion that heavily employs the use of animation
        cancelling in order to succeed. I personally believe that Riven will
        always be relevant in the right hands, especially with the existence of
        Death's Dance, but is currently inferior to other top lane
        champions. Riven isn't necessarily weak by any means, but other
        champions are simply stronger, easier to play, and have more utility
        within their kits in comparison to Riven. If you're still willing to
        play this champion despite acknowledging the fact that you'll have to
        work many times harder than your lane opponent to achieve the same levels
        of damage, then welcome!
        </p>
        <h1> Starting Items </h1>
        <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/f/fd/Long_Sword.png?version=b7a1ced04adab1c3090388d76744e7d0" alt=""/>
        <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/a/af/Refillable_Potion.png?version=bfaf651603d56834c38401026016e0d0" alt=""/>
        <p> I usually start Long Sword and Refillable Potion instead of 3 potions
        since I see myself using potions very often. If you REALLY need to stay
        in lane and not lose Teleport advantage early, feel free to take 3 potions.
        Otherwise, I prefer Refillable potion.
        </p>
        <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c2/Doran%27s_Blade.png?version=c6c3af920e6624d37dbe6ba5df840686" alt=""/>
        <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c6/Item_SquareHealth_Potion.png?version=fe37524d05186339a179371b286bba1b" alt=""/>
        <p> Doran's Blade and 1 potion is a very strong start, and is often what
        I see myself getting first to win a fight early on. The extra health and
        lifesteal allows you to turn close fights into victories. Feel free to
        also get 2 Doran's Blades if you really want to dominate early on, or
        feel uncomfortable against your lane opponent. Personally, I would
        advise against stacking more than 2 Doran's Blades.
        </p>
        <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/8/81/Doran%27s_Shield.png?version=5834a4aae905b5cb5f3a1d4aa127be54" alt=""/>
        <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c6/Item_SquareHealth_Potion.png?version=fe37524d05186339a179371b286bba1b" alt=""/>
        <p> Doran's Shield and 1 potion is the standard start against either
        tough or ranged lane opponents, such as Jayce, Gangplank, or Kennen.
        The passive will help you sustain alongside your shield when you get
        poked while trying to get minions.
        </p>
        <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c9/Cloth_Armor.png?version=4ee85485f51bfa4860ec51c37a09a6b7" alt=""/>
        <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c6/Item_SquareHealth_Potion.png?version=fe37524d05186339a179371b286bba1b" alt=""/>
        <p> Cloth Armor and 5 potions is something I would only ever consider
        taking against these champions: Jayce, Kennen, Gangplank, or any
        Marksman. This essentially allows you to survive lane and rush Ninja
        Tabi. Don't expect to get any early kills if you start this.
        </p>
        <h1> Boots </h1>
        <h5> Do not get any other boots other than these three on Riven. </h5>
        <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/6/6f/Ninja_Tabi.png?version=e4c6fa32fc065da5c732b91fe0135d92" alt=""/>
        <p> Ninja Tabi is broken in my opinion; it reduces damage from
        all basic attacks by 12%, which will instantly make you a lot tankier
        to a large majority of champions top lane. There is no shame in
        rushing this if you're having trouble against an AD top laner. Bonus
        movement speed is always nice, and you'll have a much easier time
        surviving.
        </p>
        <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/3/36/Mercury%27s_Treads.png?version=645f00a6330cedb746eb83ee3607133d" alt=""/>
        <p> Mercury's Treads are the go-to buy if the enemy team has a lot of
        crowd-control abilities, even if your lane opponent may not be a mage.
        Unless you're able to close out the game early, get this even if your
        lane opponent does physical damage. You won't be rushing Ninja Tabi
        anyways if you're dominating top, and Riven is very vulnerable when
        CC'd. </p>
        <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/d/d3/Ionian_Boots_of_Lucidity.png?version=b4c40e71afa62e4c8b110e7337604a66" alt=""/>
        <p> Ionian Boots of Lucidity used to be a favorite of mine, and allows
        you to quickly attain 45% CDR if you run the Inspiration tree. However,
        I tend to shy away from these boots in favor of Ninja Tabi and Mercury's
        Treads. These boots are a fantastic choice if you're trying to snowball
        a lead into a quick victory.
        </p>
        <h1> Item Explanations </h1>
        <h2> Executioner's Calling </h2>
        <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/d/da/Executioner%27s_Calling.png?version=56a7a7bf8b94813731bb816e0137c911" alt=""/>
        <p> A special section just for this item. Healing is extremely prevalent
        in the game right now, especially due to how overpowered Blade of the
        Ruined King and Death's Dance are right now. Build this item early and
        sit on it if your lane opponent rushes any of the two items previously
        mentioned, or has in-built healing like Aatrox or Vladimir. It's 800
        gold. You'll ruin your opponent's day. It'll be lovely. Invest in this
        item unless you want to be sucked dry by Vladimir. </p>
        <h2> First Full Item Choices </h2>
        <h5> I am going to assume you know that AD and 40% CDR are essential on
        Riven, and will typically ignore these stats in my explanations unless
        they are significant. </h5>
        <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/f/f2/Black_Cleaver.png?version=d552f5b58c551a49776470eaa31e7fa9" alt=""/>
        <p> Black Cleaver is an essential item on Riven. I almost always build this
        item first unless I'm going for an Essence Reaver or Lethality based build.
        The health and passive this item gives is massively overlooked; Riven has
        relatively low base health and armor compared to other top laners, so
        the extra health really helps. She has 2422 HP at level 18 with just
        the health from item. In addition, the passive is borderline broken on
        Riven. She can perfectly proc all 6 stacks of Black Cleaver almost
        instantly with a Broken Wings (Q) combo, essentially negating 24% of the
        target's TOTAL armor permanently. and the movement speed lets you
        stick to running enemies while combo-ing them. Build this item.</p>
        <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/ce/Essence_Reaver.png?version=3d3b2ef381b85288fe15b1621bfd628f" alt=""/>
        <p> Essence Reaver might seem like an odd choice for a first item, but
        gives Riven the ability to melt champions in the right matchups. Compared
        to Black Cleaver, this item grants nearly double the amount of AD, and
        also the ability to critically strike enemies 25% of the time. 25% critical
        chance might not seem very high on paper, but if you recognize that Riven
        can quickly get 3 autoattacks off per Broken Wings (Q) combo, you'll see
        that the chance of Riven getting at least one critical strike off in a
        combo is a whopping 57.8125%! Unfortunately, the mana restoration passive
        is wasted, but this can be overlooked pretty easily. Feel free to try this against
        squishy champions like Kayle; you'll absolutely destroy them. However,
        never go this build against tanks unless you're able to wrap up the
        game early. This item does not scale well on Riven at all. You also
        explode like a firework if you rush this item. Don't say I didn't warn
        you. </p>
        <p> Math behind Crit </p>
        <h2> Death's Dance </h2>
        <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/1/11/Death%27s_Dance.png/180px-Death%27s_Dance.png?version=b4ba4c412de18e66e001bcf457ac8175" alt=""/>
        <p> You <i>will</i> be building Death's Dance as your second item. The only
        exceptions to this would be if you're absolutely dominating, or are
        building glass-cannon Riven. In these cases, you might consider Youmuu's
        Ghostblade as your second item, but in any other case, you will be
        building Death's Dance. That's just how essential this item is on Riven.
        Besides granting some helpful armor and magic resistance, the passive of
        this item allows Riven to heal from inflicting ANY kind of damage, whether
        it be in the form of autoattacks or abilities. Since Riven can quickly
        chain together autoattacks and abilities, she can heavily abuse this
        passive. In addition, by having Death's Dance convert 30% of all
        damage you take into bleed damage, you effectively become tankier, since
        you don't immediately take as much damage as you would without this item.
        In the past, Riven's Valor (E) shield was on such a low cooldown that
        you could essentially tank all the bleed damage with your shield, making
        her an unkillable monster. However, with the nerfs to her shield cooldown,
        she isn't able to do this anymore. Thus, having some extra health (e.g. from
        Black Cleaver) is extremely useful so you don't just bleed to death.
        </p>
        <h5> Funnily enough, you are effectively done with your core build at this point.
        Any items you purchase from this point forward are situational. </h5>
        <h2> Items to Consider </h2>
        <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/d/da/Guardian_Angel.png?version=b4253321f11d67ce710bdf842208dbde" alt=""/>
        <p> Guardian Angel will always be a solid purchase; it gives you an extra
        life, which allows you to engage without fear if you're the main initiator
        on your team. It also builds out of Stopwatch, which is extremely useful.
        Just remember that it revives you with 50% of your BASE health, so you
        will probably come back to life with about 30% of your TOTAL health in
        most cases. If you have Spirit Visage built for some reason, you'll
        restore up to 65% BASE health instead. Also don't use Quicksilver Sash
        while you are reviving. Yes, you can use it while in stasis, and yes,
        you'll waste it like a clown. </p>
        <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/a/a5/Sterak%27s_Gage.png?version=658731989646c2fbf86d039b6cb3b271" alt=""/>
        <p> Sterak's Gage is an item I really like, but I don't find myself
        building very often due to the need to build other situational items.
        It grants 450 health, which will make Riven extremely tanky with 2872 HP
        and a 637.5 HP Lifeline shield at level 18 if built alongside Black
        Cleaver. Also, it grants 50% of your BASE AD as BONUS AD, which is
        nothing to snuff at either (57.5 AD at level 18; more than Death's Dance).
        Some players overlook the increased size and 30% tenacity this item grants
        when Lifeline is triggered; if you have Blade of the Exile (R) active
        alongside the size bonus, your sword will be as long as Sephiroth, making
        you extremely disruptive in a teamfight.
        </p>
        <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/5/5b/Lord_Dominik%27s_Regards.png/180px-Lord_Dominik%27s_Regards.png?version=bff64d392a1406584f3046677095e71a" alt=""/>
        <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/1/1d/Mortal_Reminder.png/180px-Mortal_Reminder.png?version=b1178a775ebc78ef5161cff6e25525bd" alt=""/>
        <p> Lord Dominik's Regards if you really need the extra 10% total armor
        penetration (i.g. against Malphite), otherwise get Mortal Reminder. You
        will be able to easily inflict Grievous Wounds on everyone in a teamfight
        with your abilities. I see myself building these items very often,
        as tanks love stacking armor in the form of Ninja Tabi and Thornmail
        to combat excessive lifesteal; ironically, tanks themselves also have
        lots of self-sustain these days (Dr. Mundo, Volibear), making Mortal
        Reminder better against them.
        </p>
        <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/2/21/Mercurial_Scimitar.png?version=eeec224061fee42d358d02767f27acb9" alt=""/>
        <p> Mercurial Scimitar needs no explanation. If the enemy team has a lot
        of crowd-control abilities, build Quicksilver Sash, and finish this
        item last in your build if you keep it. You really don't need the extra
        1 second of moment speed the full item gives, and other fully completed
        items provide better stats.
        </p>
        <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c6/Maw_of_Malmortius.png?version=190ca784657cee4fde91fa3e85fbf702" alt=""/>
        <p> Maw of Malmortius is great against AP champions top lane, such as
        Rumble and Ryze. It grants a MASSIVE amount of magic resistance (50),
        only 5 less than the best magic resistance items in the game. It also
        gives Riven a fat 350 magic damage shield, 20 AD, 10% spell vamp, and
        10% lifesteal when Lifeline is activated. Unfortunately, you might
        go over the CDR cap if you get this item alongside Black Cleaver and
        Death's Dance, but it'll be worthwhile, especially if you have the
        Transcendence rune. Get this item and Death's Dance, and you'll destroy
        all AP top laners. And yes, spell vamp works on your abilities. </p>
      </Container>
    </Container>
  </Styles>
)
